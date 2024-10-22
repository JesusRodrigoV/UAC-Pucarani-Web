<script setup>
import { ref } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const buttons = [
  { label: 'Opción 1', content: 'Contenido para Opción 1' },
  { label: 'Opción 2', content: 'Contenido para Opción 2' },
  { label: 'Opción 3', content: 'Contenido para Opción 3' }
];

const activeButton = ref(0);

function setActiveButton(index) {
  activeButton.value = index;
}
</script>

<template>
  <Header />
  <div class="principal">
    <div class="fisio-container">
      <div class="image-container">
        <img src="@/assets/images/car_enfe.jfif" alt="Carreras UAC" class="main-image" />
        <div class="overlay">
          <h1 class="overlay-text">Enfermería</h1>
        </div>
      </div>
      <div class="info-cards">
        <div class="info-card">
          <i class='bx bx-time-five info-icon'></i>
          <h2>Duración de la carrera</h2>
          <p>10 semestres</p>
        </div>
        <div class="info-card">
          <i class='bx bx-book-bookmark info-icon'></i>
          <h2>Áreas de estudio</h2>
          <ul>
            <li>Enfermería General y Especialidade</li>
            <li>Salud Pública</li>
            <li>Salud Mental y Psicología</li>
            <li>Administración y Ética</li>
          </ul>
        </div>
        <div class="info-card">
          <i class='bx bxs-bookmark-star info-icon'></i>
          <h2>Modalidades de graduación</h2>
          <ul>
            <li>Graduación por excelencia</li>
            <li>Tesis de grado</li>
            <li>Trabajo dirigido</li>
            <li>Proyecto de grado</li>
            <li>Graduación por diplomado</li>
          </ul>
        </div>
      </div>
      <div class="materias">
        <div class="menu">
          <button
            v-for="(button, index) in buttons"
            :key="index"
            @click="setActiveButton(index)"
            :class="{ active: index === activeButton }">
            {{ button.label }}
          </button>
        </div>
        <div class="content" v-if="activeButton.value >= 0 && activeButton.value < buttons.length">
          <p>{{ buttons[activeButton.value].content }}</p>
        </div>
        <div v-else>
          <p>Contenido no disponible</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.materias {
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 25px;
}
.menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
.menu button {
  padding: 10px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  width: 25%;
  margin-bottom: 10px;
  transition: background-color 0.3s, color 0.3s;
}
.menu button.active {
  background-color: #024a97;
  color: yellow;
}
.content {
  flex: 3;
  padding: 20px;
  border: 2px solid #000000;
  background-color: #f9f9f9;
  width: 500px;
  height: 500px;
}
/* Otros estilos existentes */
.fisio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.image-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
}
.main-image {
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
.info-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
.info-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 2.5%;
}
.info-card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.info-card p, .info-card ul {
  font-size: 16px;
  color: #555;
}
.info-icon {
  font-size: 75px;
  margin-bottom: 15px;
}
i:hover {
  color: blue;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  margin: 5px 0;
}
</style>
