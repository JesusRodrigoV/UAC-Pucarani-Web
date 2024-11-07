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
          <li>Área 1</li>
          <li>Área 2</li>
          <li>Área 3</li>
          <li>Área 4</li>
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

    <!-- Cards de beneficios -->
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

  <section class="admissions-call-to-action">
    <h2>¿Listo para unirte a nuestra familia académica?</h2>
    <p>
      Da el primer paso hacia tu futuro en la UAC Pucarani. Explora las opciones de admisión y conoce el proceso para formar parte de una institución que valora la excelencia, el respeto y el compromiso con nuestra comunidad.
    </p>
    <RouterLink to="/admisiones" class="admissions-button">Ir a Admisiones</RouterLink>
  </section>

  <Footer />
</template>

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
  }
};
</script>

<style scoped>
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

.cardil-front, .cardil-back {
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
  background-color: #005a99;
  border: 4px solid #005796;
}

.cardil-back {
  background-color: #f3c701;
  border: 4px solid #f3c701;
  transform: rotateY(180deg);
}

.cardil:hover .cardil-front, .cardil:hover .cardil-back {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

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

@media (max-width: 768px) {
  .info-cards, .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .info-card, .cardil {
    width: 90%;
    max-width: 400px;
  }
}
</style>
