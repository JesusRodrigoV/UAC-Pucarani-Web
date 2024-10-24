<template>
  <div class="calendar-container">
    <h1>Calendario</h1>
    <div class="calendar-header">
      <button @click="prevMonth">Anterior</button>
      <h2>{{ months[currentMonth] }} {{ currentYear }}</h2>
      <button @click="nextMonth">Siguiente</button>
    </div>
    <div class="calendar-grid">
      <div class="day-name" v-for="day in days" :key="day">{{ day }}</div>
      <div
        v-for="blank in blankDays"
        :key="'blank-' + blank"
        class="day-blank"
      ></div>
      <div
        v-for="day in daysInMonth"
        :key="day"
        class="day"
        :class="{ today: isToday(day) }"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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