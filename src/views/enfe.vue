<template>
  <Header />
  <Carousel :images="carouselImages" carouselText="Enfermería" />

  <div class="fisio-container">
    <!-- Info Cards -->
    <div class="info-cards">
      <div class="info-card">
        <i class='bx bx-time info-icon'></i>
        <h2>Duración de la carrera</h2>
        <p>10 semestres</p>
      </div>

      <div class="info-card">
        <i class='bx bx-book info-icon'></i>
        <h2>Áreas de estudio</h2>
        <ul>
          <li>Fundamentos de Enfermería</li>
          <li>Cuidado del Paciente Crítico</li>
          <li>Salud Pública y Comunitaria</li>
          <li>Enfermería Materno-Infantil</li>
        </ul>
      </div>

      <div class="info-card">
        <i class='bx bxs-bookmark info-icon'></i>
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

    <div class="advantages-section">
      <h2>Ventajas</h2>
      <div class="cards-container">
        <div class="cardil" v-for="(benefit, index) in benefits" :key="index">
          <div class="cardil-inner">
            <div class="cardil-front">
              <p>{{ benefit.title }}</p>
            </div>
            <div class="cardil-back">
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="curriculum-section">
      <h2>Malla Curricular</h2>
      <button class="curriculum-button" @click="downloadCurriculum">Descargar Malla</button>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<script>
import img6 from '@/assets/images/enfe/enfe6.jpg';
import img7 from '@/assets/images/enfe/enfe7.jpg';
import img8 from '@/assets/images/enfe/enfe8.jpg';
import img9 from '@/assets/images/enfe/enfe9.jpg';
import Carousel from '../components/Carousel.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';

export default {
  components: {
    Footer,
    Header,
    Carousel
  },
  data() {
    return {
      carouselImages: [img6, img7, img8, img9],
      benefits: [
        { title: "Buena Remuneración", description: "Posibilidad de ingresos competitivos en diferentes ámbitos de la salud." },
        { title: "Alta Demanda", description: "Los profesionales en enfermería son necesarios en diversos entornos, especialmente en áreas rurales y urbanas." },
        { title: "Diversidad Laboral", description: "Oportunidades de trabajar en hospitales, clínicas, y consultorios." },
        { title: "Desarrollo Profesional", description: "Existen oportunidades de especialización en áreas como pediatría, geriatría y salud pública." },
        { title: "Estabilidad Laboral", description: "El sector salud es indispensable y ofrece estabilidad en el mercado laboral." }
      ]
    };
  },
  methods: {
    downloadCurriculum() {
      const link = document.createElement('a');
      link.href = '/malla_enfermeria.pdf';
      link.download = 'malla_enfermeria.pdf';
      link.click();
    }
  }
};
</script>

<style scoped>
/* Similar styling to maintain consistency across both pages */
.fisio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.info-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
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

.advantages-section {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 40px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.cardil {
  width: 250px;
  height: 150px;
  perspective: 1000px;
}

.cardil-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}

.cardil:hover .cardil-inner {
  transform: rotateY(180deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.cardil-front,
.cardil-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}

.cardil-front {
  background-color: var(--amarillo);
  border: 4px solid var(--amarillo);
}

.cardil-back {
  background-color: #cce7ff;
  border: 4px solid #cce7ff;
  transform: rotateY(180deg);
}

.cardil:hover .cardil-front,
.cardil:hover .cardil-back {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.curriculum-section {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 40px;
}

.curriculum-button {
  padding: 10px 20px;
  background-color: #005a99;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.curriculum-button:hover {
  background-color: #003f6d;
}

@media (max-width: 768px) {
  .info-cards,
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
  .info-card,
  .cardil {
    width: 90%;
    max-width: 400px;
  }
}
</style>
