<template>
    <Header />
    <!-- Modifica esto Menchaca nombre de la carrera -->
    <Carousel :images="carouselImages" carouselText="Carreras" />

    <div class="fisio-container" v-for="career in careerStore.careers" :key="career.id">
        <div class="general-info">
                <p class="titulo-carrera">{{ career.name_career }}</p>
                <p>{{ career.description_career }}</p>
            </div>
        <!-- Información General -->
        <div class="info-cards">
            

            <div class="info-card">
                <i class='bx bx-time'></i>
                <h2>Duración de la carrera</h2>
                <p>{{ career.duration_career }}</p>
            </div>

            <div class="info-card">
                <i class='bx bx-book' ></i>
                <h2>Áreas de estudio</h2>
                <p>{{ career.study_area }}</p>
            </div>

            <div class="info-card">
                <i class='bx bxs-bookmark-star' ></i>
                <h2>Modalidades de graduación</h2>
                <p>{{ career.graduation_modality }}</p>
            </div>

            <!-- Malla Curricular -->
            <!-- <div class="curriculum-section">
                <h2>Malla Curricular</h2>
                <button class="curriculum-button" @click="downloadCurriculum">
                    Descargar Malla
                </button>
            </div> -->
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { useCareerStore } from '../stores/career/careerStore';

import Footer from './Footer.vue';
import Header from './Header.vue';

const careerStore = useCareerStore();

// Llama a fetchCareers al montar
careerStore.fetchCareers();
</script>

<script>
import uacInicio from '@/assets/images/infra/principal.jpg';
import inicio2 from '@/assets/images/uac_inicio.jfif';
import i4 from '@/assets/images/enfe/enfe5.jpg';
import i5 from '@/assets/images/enfe/enfe6.jpg';

import i6 from '@/assets/images/fisio/fisio6.jpg';
import Carousel from '../components/Carousel.vue';

export default {
  data() {
    return {
      isModalVisible: false,
      carouselImages: [uacInicio, inicio2, i4, i5, i6],
      currentImageIndex: 0
    };
  },
};
</script>
<style scoped>

i{
    font-size: 30px;
}
.titulo-carrera{
    font-size: 30px;
    font-weight: bold;
    color:var(--azul-principal);
}
.fisio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    border: 1px solid black;

    box-shadow: 10px 5px 5px 0px rgba(0, 0, 0, 0.5);
}
.general-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 35px;
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

.malla {
    width: 90%;
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