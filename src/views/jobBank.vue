<template>
  <Header />
  <Carousel :images="carouselImages" :carouselText="t('secciones.bankjob')" />
  <div class="fisio-container">
    

    
    <div class="container-group">
      <!-- Opción Enfermería -->
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

      <!-- Opción Fisioterapia -->
      <div class="option-card" @click="selectOption('fisioterapia')">
        <p class="prompt">Para fisioterapia</p>
        <div class="info-content">
          <div class="info-row">
            <!-- <img src="@/assets/images/requisitos.png" alt="Requisitos" class="info-icon" /> -->
            <div>Título</div>
          </div>
          <div class="info-row">
            <!-- <img src="@/assets/images/labor.png" alt="Labores" class="info-icon" /> -->
            <div>Análisis y tratamiento</div>
          </div>
          <div class="info-row">
            <!-- <img src="@/assets/images/relojj.png" alt="Horarios y lugar" class="info-icon" /> -->
            <div>13:30-19:00 | Avenida Avaroa</div>
          </div>
        </div>
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
