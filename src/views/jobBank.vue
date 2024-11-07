<script setup>
import { onMounted } from 'vue';
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';

onMounted(() => {
  const fadeElements = document.querySelectorAll('.fade-in-element');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
</script>
<script>
import Modal from './Modal.vue';
import img1 from '@/assets/images/bolsa3.jpg';
import Carousel from '../components/Carousel.vue';
export default {
  components: {
    Modal
  },
  data() {
    return {
      carouselImages: [img1],
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
  <Carousel :images="carouselImages" carouselText="Bolsa de trabajo" />
  <div class="fisio-container">

    <div>
      <h1>Para enfermería</h1>
    </div>
    <div class="info-cards">
      <div class="info-card">
        <img src="@/assets/images/requisitos.png" alt="Requisitos" class="info-icon" />
        <h2>Requisitos</h2>
        <ul>
          <li>Título</li>
          <li>Experiencia de 2 años</li>
          <li>Inglés C3</li>
        </ul>
      </div>

      <div class="info-card">
        <img src="@/assets/images/labor.png" alt="Labores" class="info-icon" />
        <h2>Labores</h2>
        <ul>
          <li>Administrar medicamentos, monitorear signos vitales y brindar atención directa a pacientes en diversas
            unidades de salud.</li>
          <li>Colaborar con médicos durante cirugías y otros procedimientos, asegurando que se sigan los protocolos
            adecuados.</li>
          <li>Participar en campañas de vacunación, promoción de la salud y prevención de enfermedades en la comunidad.
          </li>
        </ul>
      </div>

      <div class="info-card">
        <img src="@/assets/images/duracion.png" alt="Horarios y lugar" class="info-icon" />
        <h2>Horarios y lugar</h2>
        <ul>
          <li>8:30-13:00</li>
          <li>Hospital Obrero</li>
        </ul>
      </div>
    </div>


    <div>
      <h1>Para fisiología y kimioterapia</h1>
    </div>
    <div class="info-cards">
      <div class="info-card">
        <img src="@/assets/images/requisitos.png" alt="Requisitos" class="info-icon" />
        <h2>Requisitos</h2>
        <ul>
          <li>Título</li>
          <li>Experiencia de 1 año</li>
          <li>Conocimiento básico en Inglés y Aymara</li>
        </ul>
      </div>

      <div class="info-card">
        <img src="@/assets/images/labor.png" alt="Labores" class="info-icon" />
        <h2>Labores</h2>
        <ul>
          <li>Evaluar y tratar lesiones musculoesqueléticas, utilizando técnicas como ejercicios terapéuticos, masajes y
            electroterapia.</li>
          <li>Diseñar programas de prevención y acondicionamiento físico para atletas y personas en riesgo de lesiones.
          </li>
        </ul>
      </div>

      <div class="info-card">
        <img src="@/assets/images/duracion.png" alt="Horarios y lugar" class="info-icon" />
        <h2>Horarios y lugar</h2>
        <ul>
          <li>13:30-19:00</li>
          <li>Av. Avaroa</li>
        </ul>
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
  background-color: #e6f7ff;
  border-color: #66b2ff;
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

.info-card p,
.info-card ul {
  font-size: 16px;
  color: #555;
}

.info-icon {
  width: 60px;
  height: auto;
  transition: opacity 0.3s ease;
}

.info-card:hover .info-icon {
  opacity: 0.85;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
  color: #555;
}


@media (max-width: 768px) {
  .info-cards {
    flex-direction: column;
    align-items: center;
  }

  .info-card {
    width: 100%;
    max-width: 300px;
  }
}
</style>