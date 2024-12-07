<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <div class="calendar-container">
        <div class="cerrar">
          <i class='bx bx-x ' @click="closeModal"></i>
        </div>
        <h1 style="color:var(--azul-hover); font-size: 25px;">Calendario</h1>
        <div class="calendar-header">
          <i class='bx bx-chevron-left' @click="prevMonth"></i>

          <h2 style="color:var(--azul-hover)">{{ months[currentMonth] }} {{ currentYear }}</h2>
          <i class='bx bx-chevron-right' @click="nextMonth"></i>
        </div>
        <div class="calendar-grid">
          <div class="day-name" v-for="day in days" :key="day">{{ day }}</div>
          <div v-for="blank in blankDays" :key="'blank-' + blank" class="day-blank"></div>
          <div v-for="day in daysInMonth" :key="day"
            :class="['day', { 'today': isToday(day), 'has-event': events[day] }]" @click="openDayEvents(day)">
            {{ day }}
            <span v-if="events[day]" class="event-indicator">•</span>
          </div>
        </div>
      </div>

      <!-- Modal para añadir eventos -->
      <div v-if="authStore.token">
        <div v-if="showEventModal" class="event-modal">
          <h3>Añadir Evento para el {{ selectedDay }} {{ months[currentMonth] }} {{ currentYear }}</h3>
          <label>Hora:</label>
          <input type="time" v-model="eventTime" />
          <label>Descripción:</label>
          <input type="text" v-model="eventDescription" />
          <div class="modal-buttons">
            <button @click="addEvent" class="modal-button">Añadir Evento</button>
            <button @click="closeEventModal" class="modal-button">Cancelar</button>
          </div>
        </div>
      </div>

      <!-- Modal para ver eventos del día -->
      <div v-if="showDayEventsModal" class="event-modal">
        <h3>Eventos para el {{ selectedDay }} {{ months[currentMonth] }} {{ currentYear }}</h3>
        <ul>
          <li v-for="(event, index) in events[selectedDay]" :key="index">
            {{ event.time }} - {{ event.description }}
          </li>
        </ul>
        <button @click="closeDayEventsModal" class="modal-button">Cerrar</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from '../stores/login/loginStore';
const authStore = useAuthStore();
</script>
<script>
export default {
  props: ['visible', 'isAdmin'],
  data() {
    return {
      currentDate: new Date(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      events: {}, // Objeto para almacenar eventos
      showEventModal: false,
      showDayEventsModal: false,
      selectedDay: null,
      eventTime: '',
      eventDescription: '',
    };
  },
  computed: {
    daysInMonth() {
      const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      return Array.from({ length: days }, (v, k) => k + 1);
    },
    blankDays() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      return Array.from({ length: firstDay }, (v, k) => k);
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    isToday(day) {
      const today = new Date();
      return (
        today.getDate() === day &&
        today.getMonth() === this.currentMonth &&
        today.getFullYear() === this.currentYear
      );
    },
    openEventModal(day) {

      this.selectedDay = day;
      this.eventTime = '';
      this.eventDescription = '';
      this.showEventModal = true;
    },
    closeEventModal() {
      this.showEventModal = false;
    },
    addEvent() {
      if (!this.events[this.selectedDay]) {
        this.events[this.selectedDay] = [];
      }
      this.events[this.selectedDay].push({
        time: this.eventTime,
        description: this.eventDescription,
      });
      this.showEventModal = false;
    },
    openDayEvents(day) {
      this.selectedDay = day;
      if (this.events[day]) {
        this.showDayEventsModal = true;
      } else {
        this.openEventModal(day); // Si no hay eventos, abre el modal para añadir
      }
    },
    closeDayEventsModal() {
      this.showDayEventsModal = false;
    },
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.calendar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  max-width: 400px;
}

.day-name {
  font-weight: bold;
  text-align: center;
}

.day,
.day-blank {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.day:hover {
  background-color: #A0ACAD;
}

.today {
  background-color: var(--azul-hover);
  font-weight: bold;
  color: white;
}

.today:hover {
  background-color: white;
  color: red;
}

.has-event {
  /* border: 2px solid var(--azul-principal); */
  position: relative;
}

.event-indicator {
  position: absolute;
  top: 14px;
  /* right: 5px; */
  color: var(--azul-principal);
  font-size: 1.5rem;
}

.cerrar {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  top: 160px;
  right: 575px;
  cursor: pointer;
}

.cerrar i {
  font-size: 35px;
}

.cerrar:hover {
  color: red;
}

.event-modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  max-width: 300px;
  width: 90%;
}

.event-modal h3 {
  margin-top: 0;
}

.event-modal label {
  display: block;
  margin-top: 10px;
}

.event-modal input {
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  box-sizing: border-box;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.modal-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: var(--azul-principal);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.modal-button:hover {
  background-color: var(--azul-hover);
}
</style>