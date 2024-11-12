<template>
  <Header />
  <Carousel :images="carouselImages" carouselText="Enfermería" />

  <div class="fisio-container">
    <!-- Características -->
    <div class="characteristics-section">
      <h2>Características</h2>
      <div class="info-cards">
        <div class="info-card">
          <i class='bx bx-time info-icon'></i>
          <h3>Duración de la carrera</h3>
          <p>10 semestres</p>
        </div>
        <div class="info-card">
          <i class='bx bx-book info-icon'></i>
          <h3>Áreas de estudio</h3>
          <ul>
            <li>Fundamentos de Enfermería</li>
          <li>Cuidado del Paciente Crítico</li>
          <li>Salud Pública y Comunitaria</li>
          <li>Enfermería Materno-Infantil</li>
          </ul>
        </div>
        <div class="info-card">
          <i class='bx bxs-bookmark info-icon'></i>
          <h3>Modalidades de graduación</h3>
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

    <!-- Ventajas -->
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

    <!-- Malla Curricular -->
    <div class="curriculum-section">
      <h2>Malla Curricular</h2>
      <button class="curriculum-button" @click="downloadCurriculum">Descargar Malla</button>
    </div>
  </div>

  <Footer />
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
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
        { title: "Lucrativa", description: "Se cobra mucho por cada operación." },
        { title: "Alta Demanda", description: "La necesidad de enfermeros crece cada año." },
        { title: "Flexibilidad Horaria", description: "Es posible encontrar turnos que se adapten." },
        { title: "Crecimiento Profesional", description: "Existen muchas oportunidades de ascenso." },
        { title: "Estabilidad Laboral", description: "Es una carrera con poca volatilidad en el empleo." }
      ]
    };
  },
  methods: {
    downloadCurriculum() {
      const link = document.createElement('a');
      link.href = '/mallac_enf-1.pdf';
      link.download = 'mallac_enf-1.pdf';
      link.click();
    }
  }
};
</script>

<style scoped>
/* Contenedor Principal */
.fisio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Sección de Características */
.characteristics-section {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 40px;
}

.characteristics-section h2 {
  font-size: 28px;
  color: #005a99;
  margin-bottom: 20px;
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

.info-card h3 {
  font-size: 20px;
  color: #333;
}

.info-card p, .info-card ul 
.info-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #005c99;
  transition: color 0.3s ease;
}

.info-card p,
.info-card ul {
  font-size: 16px;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
/* Sección de Ventajas */
.advantages-section {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 40px;
}

.advantages-section h2 {
  font-size: 28px;
  color: #005a99;
  margin-bottom: 20px;
}

/* Estilos para las tarjetas de beneficios */
.benefits-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.benefit-card {
  width: 250px;
  height: 150px;
  perspective: 1000px;
}

.benefit-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}

.benefit-card:hover .benefit-card-inner {
  transform: rotateY(180deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.benefit-card-front,
.benefit-card-back {
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

.benefit-card-front {
  /* background-color: #005a99;
  border: 4px solid #005796; */
  background-color: var(--amarillo);
  border: 4px solid var(--amarillo);
}

.benefit-card-back {
  background-color: #cce7ff;
  border: 4px solid #cce7ff;
  transform: rotateY(180deg);
}

.benefit-card:hover .benefit-card-front,
.benefit-card:hover .benefit-card-back {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* Sección de Malla Curricular */
.curriculum-section {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 40px;
}

.curriculum-section h2 {
  font-size: 28px;
  color: #005a99;
  margin-bottom: 20px;
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

/* Sección de Llamado a la Acción */
.admissions-call-to-action {
  text-align: center;
  margin-top: 40px;
}

.admissions-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #005a99;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.admissions-button:hover {
  background-color: #003f6d;
}

/* Estilos Responsivos */
@media (max-width: 768px) {

  .info-cards,
  .benefits-container {
    flex-direction: column;
    align-items: center;
  }

  .info-card,
  .benefit-card {
    width: 90%;
    max-width: 400px;
  }
}
</style>
