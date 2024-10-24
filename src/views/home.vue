<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>



<template>
  <Header />

<!-- <div class="logo-container">
  <img src="@/assets/images/logoAzulUAC.png" alt="Logo UAC" class="uac-logo" />
</div> -->

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
  position: fixed;
  top: 25px;
  left: 20px;
  z-index: 9999;
}



.uac-logo {
  width: 100px;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.icon-container:hover .uac-logo {
  transform: translateY(10px);
}

</style>
