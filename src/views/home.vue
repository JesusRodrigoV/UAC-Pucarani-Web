<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
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
</script>



<template>
  <Header />
  <!-- Logo encima del header -->
<div class="logo-container">
  <img src="@/assets/images/logoAzulUAC.png" alt="Logo UAC" class="uac-logo" />
</div>

  <div class="home-container">
    <div class="image-container">
      <img src="@/assets/images/uac_inicio.jfif" alt="UAC Inicio" class="home-image" />
      <div class="overlay">
        <h1 class="overlay-text">UAC Pucarani</h1>
      </div>
    </div>
  </div>

  <div class="icon-container" @click="toggleCalendar">
    <img src="@/assets/images/icono.png" alt="Icono Calendario" class="calendar-icon" />
  </div>

  <transition name="fade">
    <div v-if="showCalendar" class="calendar-container">
      <h3>Calendario</h3>
      <div id="small-calendar"></div>
      <a href="full-calendar.html" class="calendar-link">Calendario completo</a>
    </div>
  </transition>

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


.icon-container {
  position: fixed;
  bottom: 500px;
  right: 20px;
  cursor: pointer;
  z-index: 100;
}


.calendar-icon {
  width: 30px;
  height: 30px;
}

/* Contenedor del calendario */
.calendar-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
}

#small-calendar {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
}

.calendar-link {
  margin-top: 10px;
  display: inline-block;
  color: #007BFF;
  text-decoration: none;
}

.calendar-link:hover {
  text-decoration: underline;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


.logo-container {
  position: fixed; /* Fijo en la pantalla */
  top: 25px;
  left: 20px;
  z-index: 9999; /* Un valor mucho mayor para asegurar que esté sobre todo */
}



.uac-logo {
  width: 100px; /* Tamaño del logo */
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.icon-container:hover .uac-logo {
  transform: translateY(10px); /* Hace que el logo baje cuando se hace scroll */
}

</style>
