<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import fisio from './fisio.vue'
import enfe from './enfe.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <Header />

  <div class="careers-container">
    <div class="image-container">
      <img src="@/assets/images/carreras.jpg" alt="Carreras UAC" class="main-image" />
      <div class="overlay">
        <h1 class="overlay-text">Carreras</h1>
      </div>
    </div>

    <div class="links-container">
      <RouterLink to="/fisio">
        <img src="@/assets/images/logoFisioKineLetra.png" alt="Fisioterapia" class="link-image" />
      </RouterLink>
      <RouterLink to="/enfe">
        <img src="@/assets/images/logoEnfermeriaLetra.png" alt="Enfermería" class="link-image" />
      </RouterLink>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.careers-container {
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

.links-container {
  display: flex;
  justify-content: center;
  gap: 175px;
  margin-top: 20px;
}

.link-image {
  width: 200px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.link-image:hover {
  transform: scale(1.1);
}
</style>
