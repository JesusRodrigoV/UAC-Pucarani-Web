<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';

</script>
<script>
import Boton from './Boton.vue';
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    }
  }

};

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

  
  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Boton />
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 20px;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
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

 .uac-logo {
  transform: translateY(10px);
}

</style>