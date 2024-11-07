<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>
<script>
import img10 from '@/assets/images/enfe/enfe10.jpg';
import img11 from '@/assets/images/enfe/enfe11.jpg';
import img12 from '@/assets/images/enfe/enfe12.jpg';
import img6 from '@/assets/images/enfe/enfe6.jpg';
import img7 from '@/assets/images/enfe/enfe7.jpg';
import img8 from '@/assets/images/enfe/enfe8.jpg';
import img9 from '@/assets/images/enfe/enfe9.jpg';
import Carousel from '../components/Carousel.vue';
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      carouselImages: [img6, img7, img8, img9, img10, img11, img12],
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
  <Carousel :images="carouselImages" carouselText="Enfermeria" />
  <div class="fisio-container">
    <!-- <div class="image-container">
      <img src="@/assets/images/car_enfe.jfif" alt="Carreras UAC" class="main-image" />
      <div class="overlay">
        <h1 class="overlay-text">Enfermería</h1>
      </div>
    </div> -->

    <div class="info-cards">
      <div class="info-card">
        <i class='bx bx-time info-icon'></i>
        <h2>Duración de la carrera</h2>
        <p>10 semestres</p>
      </div>

      <div class="info-card">
        <i class='bx bx-book info-icon'  alt="Áreas de estudio"></i>
        <h2>Áreas de estudio</h2>
        <ul>
          <li>Área 1</li>
          <li>Área 2</li>
          <li>Área 3</li>
          <li>Área 4</li>
        </ul>
      </div>

      <div class="info-card">
        <i class='bx bxs-bookmark info-icon' alt="Modalidades de graduación"></i>
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
  </div>
  <section class="admissions-call-to-action">
    <h2>¿Listo para unirte a nuestra familia académica?</h2>
    <p>
      Da el primer paso hacia tu futuro en la UAC Pucarani. Explora las opciones de admisión y conoce el proceso para formar parte de una institución que valora la excelencia, el respeto y el compromiso con nuestra comunidad.
    </p>
    <RouterLink to="/admisiones" class="admissions-button">Ir a Admisiones</RouterLink>
  </section>
  <Footer />
</template>

<style scoped>
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
  flex-wrap: wrap;
  row-gap: 20px;
}

.info-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
.info-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #66b2ff;
  background-color: #e6f7ff;
}

.info-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  transition: color 0.3s ease;
}

.info-card:hover h2 {
  color: #005c99;
}

.info-card p, .info-card ul {
  font-size: 16px;
  color: #555;
}



ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
}



@media (max-width: 768px) {
  .info-cards {
    flex-direction: column;
    align-items: center;
  }

  .info-card {
    width: 90%;
    max-width: 400px;
  }
}

</style>
