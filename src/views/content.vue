<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { onMounted } from 'vue';
import { useNewsStore } from '../stores/news/newsStore.js';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();

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

const store = useNewsStore();

onMounted(async () => {
  await store.fetchNews();
});

// Disable and Enable Scroll Functions
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }; // Arrow keys
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

</script>

<script>
import Modal from './Modal.vue';
import NoticiasForm from '../components/AdminForms/NoticiasForm.vue';
import uacInicio from '@/assets/images/infra/principal.jpg';
import Carousel from '../components/Carousel.vue';

export default {
  components: {
    Modal,
    NoticiasForm
  },
  data() {
    return {
      mostrarModal: false,
      carouselImages: [uacInicio],
      isModalVisible: false
    };
  },
  methods: {
    showModal(news) {
      this.isModalVisible = true;
      this.selectedNews = news; // Aquí se pasa la noticia para editar
      disableScroll(); // Deshabilita el scroll cuando el modal se muestre
    },

    hideModal() {
      this.isModalVisible = false;
      enableScroll(); // Habilita el scroll al cerrar el modal
    }
  }
};
</script>

<template>
  <Header />
  <Carousel :images="carouselImages" :carouselText="t('secciones.contenido')" />
  <div class="content-container fade-in-element">
    <div class="image-info-container">
      <img src="@/assets/images/enfermeria.jpg" alt="Carrera de Enfermería" class="career-image" />
      <div class="text-info">
        <h1>Carrera de Enfermería</h1>
        <p>
          La carrera de Enfermería se enfoca en la formación de profesionales capaces de brindar
          cuidados integrales de salud, promoviendo el bienestar físico, mental y social de las
          personas en todas las etapas de la vida. Los estudiantes adquieren conocimientos teóricos
          y habilidades prácticas que les permiten desempeñarse en diversas áreas del sistema de salud.
        </p>
      </div>
    </div>
  </div>

  <div class="content-container fade-in-element">
    <div class="image-info-container reverse-layout">
      <div class="text-info">
        <h1>Carrera de Fisioterapia y Kinesiología</h1>
        <p>
          Esta carrera está orientada a formar profesionales en el área de la salud especializados
          en la prevención, tratamiento y rehabilitación de lesiones físicas. Los estudiantes
          adquieren habilidades para el tratamiento físico de pacientes a través del ejercicio terapéutico,
          técnicas manuales y agentes físicos.
        </p>
      </div>
      <img src="@/assets/images/fisioterapia.jfif" alt="Carrera de Fisioterapia y Kinesiología" class="career-image" />
    </div>
  </div>


  <div class="news-container fade-in-element">
    <div class="titu-agregar">
      <h2>Últimas Noticias</h2>
      <v-btn color="primary" @click="mostrarModal = true">
        <v-icon left><i class="bx bx-plus"></i></v-icon>
        Añadir Nueva Noticia
      </v-btn>
    </div>


    <div class="news-items">
      <div class="news-item" v-for="newss in store.news" :key="newss.id_news">
        <div class="news-image">
          <img src="@/assets/images/enfe.jfif" alt="Noticia Enfermería 1" />
        </div>
        <h3>{{ newss.holder_news }}</h3>
        <p>{{ newss.date_news }}</p>
        <p>{{ newss.summary_news }}</p>
        <div class="bloque-editar">
          <div class="iconos">
            <div class="editar">
              <button @click=""><i class='bx bxs-edit'></i></button>
            </div>


            <div class="eliminar">
              <button @click="store.deleteNews(newss.id_news)"><i class='bx bxs-trash'></i></button>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>

  <NoticiasForm v-if="mostrarModal" :show="mostrarModal" @close="mostrarModal = false" />
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Footer />
</template>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.fisio-container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 20px;
}


.image-info-container {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin-top: 40px;
}

.reverse-layout {
  flex-direction: row-reverse;
}

.career-image {
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-info {
  max-width: 600px;
}

.text-info h1 {
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1px;
  color: #17242D;
}

.text-info p {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  font-family: Arial, sans-serif;
}


.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.image-info-container {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin-top: 40px;
}

.reverse-layout {
  flex-direction: row-reverse;
}

.career-image {
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-info {
  max-width: 600px;
}

.text-info h1 {
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1px;
  color: #17242D;
}

.text-info p {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  font-family: Arial, sans-serif;
}

.fade-in-element {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in-visible {
  opacity: 1;
}


/* Estilo para la sección de noticias */
.news-container {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
}

.news-container h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #17242D;
}

.news-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.news-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-item h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.news-item p {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

.news-item a {
  color: #007BFF;
  text-decoration: none;
}

.news-item a:hover {
  text-decoration: underline;
}

/* Estilo para las imágenes de las noticias */
.news-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.news-item:hover .news-image img {
  transform: scale(1.1);
}

.news-item:hover .news-image {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Estilo general para la sección de noticias */
.news-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.news-item:hover {
  transform: translateY(-10px);
}

i {
  font-size: 30px;
}

.bloque-editar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.iconos {
  display: inline-block;
}

.editar .eliminar {
  margin: 15px;
  padding: 15px;
}

.editar {
  margin: 15px;
  display: inline;
  transition: color 0.3s ease-in-out;
}

.editar:hover {
  color: var(--succes-verde);
}

.eliminar {
  margin: 15px;
  display: inline;
  transition: color 0.3s ease-in-out;
}

.eliminar:hover {
  color: red;
}

.titu-agregar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.titu-agregar h2 {
  flex-grow: 1;
  text-align: center;
}

.titu-agregar v-btn {
  margin-left: auto;
}


@media (max-width: 768px) {
  .career-image {
    width: 300px;
  }
}

@media (max-width: 480px) {
  .career-image {
    width: 100%;
    max-width: 250px;
  }
}
</style>