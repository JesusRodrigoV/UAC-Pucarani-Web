<script setup>

import Header from './Header.vue';
import Footer from './Footer.vue';
import Boton from './Boton.vue'
import { ref, onMounted } from 'vue';


const showCalendar = ref(false);


function toggleCalendar() {
  showCalendar.value = !showCalendar.value;
  console.log('Toggling calendar', showCalendar.value);
}

onMounted(() => {
  const calendarDiv = document.getElementById('small-calendar');
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();


  let calendarHTML = `
    <h4>${month} ${year}</h4>
    <table>
      <tr><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th></tr>
      <tr>
  `;


  for (let i = 0; i < firstDay; i++) {
    calendarHTML += '<td></td>';
  }


  for (let day = 1; day <= daysInMonth; day++) {
    calendarHTML += `<td>${day}</td>`;
    if ((day + firstDay) % 7 === 0) {
      calendarHTML += '</tr><tr>';
    }
  }


  calendarHTML += '</tr></table>';
  

  calendarDiv.innerHTML = calendarHTML;
});

import { RouterLink } from 'vue-router';

</script>

<template>
  <Header />
  <div class="home-container">
    <div class="image-container">
      <img src="@/assets/images/uac_inicio.jfif" alt="UAC Inicio" class="home-image" />
      <div class="overlay">
        <h1 class="overlay-text">UAC Pucarani</h1>
      </div>
    </div>
  </div>
  <Boton />
  <RouterLink to="/calendar">
  <img src="@/assets/images/icono.png" alt="Calendario" class="calendar-icon" />
</RouterLink>

  <Footer />
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
}

.home-image {
  width: 100%;
  height: auto;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(23, 28, 47, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-text {
  color: white;
  font-size: 48px;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 2px;
  text-align: center;
}

.calendar-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 20px;
}

</style>