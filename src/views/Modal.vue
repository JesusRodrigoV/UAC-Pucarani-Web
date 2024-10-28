<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <div class="calendar-container">
        <h1>Calendario</h1>
        <div class="calendar-header">
          <button @click="prevMonth">Anterior</button>
          <h2>{{ months[currentMonth] }} {{ currentYear }}</h2>
          <button @click="nextMonth">Siguiente</button>
        </div>
        <div class="calendar-grid">
          <div class="day-name" v-for="day in days" :key="day">{{ day }}</div>
          <div v-for="blank in blankDays" :key="'blank-' + blank" class="day-blank"></div>
          <div v-for="day in daysInMonth" :key="day" class="day" :class="{ today: isToday(day) }">{{ day }}</div>
        </div>
      </div>
      <button @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible'],
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
    }
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
  z-index: 100;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 2.5%;
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

.day, .day-blank {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
}

.today {
  background-color: #f0f0f0;
  font-weight: bold;
  color: red;
}
</style>
