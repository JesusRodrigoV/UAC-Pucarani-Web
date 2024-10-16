<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
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
  </style>