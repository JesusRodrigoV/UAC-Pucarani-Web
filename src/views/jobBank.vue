<template>
  <Header />
  <Carousel :images="carouselImages" :carouselText="t('secciones.bankjob')" />
  <div class="fisio-container">
    
    <div class="publication">
        <!-- <div class="image-container">
          <img src="@/assets/images/CONRImage.jpg" alt="">
        </div> -->
        <div class="texto-container">
          <h3 class="publication-title">Red Alumni</h3>
          <p class="publication-description">La Red Alumni de la Universidad Católica Boliviana (UCB) es una plataforma dedicada a conectar a los graduados de la universidad, independientemente de su ubicación. Su objetivo principal es fortalecer los lazos entre los exalumnos y la universidad, ofreciendo oportunidades para reconectar con excompañeros, participar en eventos exclusivos y mantener una relación cercana con la institución</p>
        </div>
        <div class="boton-container">
          <a href="https://lpz.ucb.edu.bo/alumni-ucb/" target="_blank" class="publication-link">Visitar Alumni</a>
        </div>
      </div>
    
    <!-- <div class="container-group">
      <div class="option-card" @click="selectOption('enfermeria')">
        <p class="prompt">Para enfermería</p>
        <div class="info-content">
          <div class="info-row">
            <i class='bx bx-list-check info-icon'></i>
            <div>Título</div>
          </div>
          <div class="info-row">
            <i class='bx bx-briefcase info-icon'></i>
            <div>Control de medicamentos</div>
          </div>
          <div class="info-row">
            <i class='bx bx-time-five info-icon'></i>  
            <div>8:30-13:00 | Hospital Obrero</div>
          </div>
        </div>
      </div>

      <div class="option-card" @click="selectOption('fisioterapia')">
        <p class="prompt">Para fisioterapia</p>
        <div class="info-content">
          <div class="info-row"> -->
            <!-- <img src="@/assets/images/requisitos.png" alt="Requisitos" class="info-icon" /> -->
            <!-- <div>Título</div>
          </div>
          <div class="info-row"> -->
            <!-- <img src="@/assets/images/labor.png" alt="Labores" class="info-icon" /> -->
            <!-- <div>Análisis y tratamiento</div>
          </div>
          <div class="info-row"> -->
            <!-- <img src="@/assets/images/relojj.png" alt="Horarios y lugar" class="info-icon" /> -->
            <!-- <div>13:30-19:00 | Avenida Avaroa</div>
          </div>
        </div>
      </div>
    </div>
    -->
  </div> 

  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Boton />
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Modal from './Modal.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();

const isModalVisible = ref(false);
const showEnfermeria = ref(false);
const showFisioterapia = ref(false);

function showModal() {
  isModalVisible.value = true;
}

function hideModal() {
  isModalVisible.value = false;
}

function selectOption(option) {
  showEnfermeria.value = option === 'enfermeria';
  showFisioterapia.value = option === 'fisioterapia';
}
</script>

<script>
import uacInicio from '@/assets/images/bolsa3.jpg';
import Carousel from '../components/Carousel.vue';
export default {
    data() {
        return {
            carouselImages: [uacInicio],
        };
    },
};
</script>

<style scoped>
.boton-container {
  margin: 1rem 1.5rem 1.5rem 1.5rem;
}
.publication {
  margin: 10px;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.texto-container {
  flex: 1;
  margin: 1.5rem 1.5rem 0 1.5rem;
}

.publication-title {
  font-size: 1.5rem;
  color: #036;
  font-weight: 600;
  margin-bottom: 1rem;
}

.publication-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.publication-link {
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #036;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.publication-link:hover {
  background-color: #024;
}
.image-container {
  flex: 1;
  margin: 0;
  border-radius: 15px;
}
.fisio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.container-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 20px;
  margin-top: 40px;
}

.option-card {
  position: relative;
  width: 300px;
  padding: 20px;
  background: #e6f7ff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.option-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.prompt {
  font-size: 1.2em;
  color: #005c99;
  margin-bottom: 15px;
  font-weight: bold;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #333;
}

.info-icon {
  width: 40px;
  height: auto;
}


@media (max-width: 768px) {
  .container-group {
    flex-direction: column;
    align-items: center;
  }
}
</style>
