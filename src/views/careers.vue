<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Modal from './Modal.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();
const isModalVisible = ref(false);

const careers = computed(() => [
  {
    id: 1,
    name: t('carreras.fisioterapia.nombre'),
    description: t('carreras.fisioterapia.descripcion'),
    image: imgfisio,
    link: '/fisio',
  },
  {
    id: 2,
    name: t('carreras.fisioterapia.nombre'),
    description: t('carreras.fisioterapia.descripcion'),
    image: imgenfe,
    link: '/enfe',
  },
]);
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

  onUnmounted(() => {
    fadeInElements.forEach((element) => {
      observer.unobserve(element);
    });
  });
});
</script>
<script>
import img2 from '@/assets/images/fisio/fisio6.jpg';
import img1 from '@/assets/images/enfe/enfe5.jpg';

import imgfisio from '@/assets/images/logoFisioKineLetra.png';
import imgenfe from '@/assets/images/logoEnfermeriaLetra.png';
import Carousel from '../components/Carousel.vue';
export default {
  data() {
    return {
      carouselImages: [img1, img2]
    };
  },
};
</script>
<template>
  <Header />
  <Carousel :images="carouselImages" :carouselText="t('secciones.carreras')" />
  <section class="welcome-text">
    <h1>{{ t('lasSecciones.bienvenida') }}</h1>
    <p>
      {{ t('lasSecciones.descripcion_bienvenida') }}
    </p>
  </section>

  <div class="links-container">
    <div class="career-card" v-for="career in careers" :key="career.id">
      <RouterLink :to="career.link" class="sin">
        <img :src="career.image" :alt="career.name" class="link-image" />
        <h3>{{ career.name }}</h3>
        <p>{{ career.description }}</p>
        <!-- <p class="button">Más Información</p> -->
      </RouterLink>
    </div>
  </div>

  <div class="careers-container">

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
  width: 100%;
}

.link-image {
  width: 100%;
  height: 200px;
  cursor: pointer;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, .4));
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

.careers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.career-card {
  width: 20%;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
}

.sin {
  text-decoration: none;
}

.career-card:hover {
  transform: scale(1.05);
}

.career-image {
  width: auto;
  height: auto;
  border-radius: 8px;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 15px;
}
</style>