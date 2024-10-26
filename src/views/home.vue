<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Boton from './Boton.vue';

</script>



<template>
  <Header />
  <div class="principal">
    <div class="home-container">
      <div class="image-container">
        <img src="@/assets/images/uac_inicio.jfif" alt="UAC Inicio" class="home-image" />
        <div class="overlay">
          <h1 class="overlay-text">UAC Pucarani</h1>
        </div>
      </div>
    </div>
  </div>

  <Boton />
  <Footer />
</template>



<style scoped>

</style>
