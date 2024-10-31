<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Modal from './Modal.vue';

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

onMounted(() => {
  const fadeInElements = document.querySelectorAll('.fade-in-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  });

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  // Desmontar observer cuando el componente se desmonte
  onUnmounted(() => {
    fadeInElements.forEach((element) => {
      observer.unobserve(element);
    });
  });
});
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
        <div class="fade-in-element">
          <img src="@/assets/images/logoFisioKineLetra.png" alt="Fisioterapia" class="link-image" />
        </div>
      </RouterLink>
      <RouterLink to="/enfe">
        <div class="fade-in-element">
          <img src="@/assets/images/logoEnfermeriaLetra.png" alt="Enfermería" class="link-image" />
        </div>
      </RouterLink>
    </div>
  </div>
  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Boton></Boton>
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
  filter: drop-shadow(
    0 0 10px rgba(0, 0, 0, .4)
  );
  transition: transform 0.3s ease;
  background-color: transparent;
}

.link-image:hover {
  transform: scale(1.1);
}


@media (max-width: 768px) {
  .links-container {
    flex-direction: column;
    gap: 20px;
  }

  .link-image {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .overlay-text {
    font-size: 32px;
  }

  .link-image {
    width: 120px;
  }
}




/* .link-image {
  width: 200px;
  background-color: none;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.link-image:hover {
  transform: scale(1.15);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
} */

.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-element.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}



</style>