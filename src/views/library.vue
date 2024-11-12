<script setup>
import { onMounted, ref } from 'vue';
import { useBookStore } from '../stores/library/bookStore';
import Footer from './Footer.vue';
import Header from './Header.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();

const store = useBookStore();
const searchTerm = ref('');
const filteredBooks = ref([]);

onMounted(async () => {
  await store.fetchBooks();
  filteredBooks.value = store.material_bibliografico;
});


const performSearch = () => {
  filteredBooks.value = store.material_bibliografico.filter(book =>
    book.title_matbib.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    book.author_matbib.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
};
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
import LibrosForm from '../components/AdminForms/LibrosForm.vue';

import img1 from '@/assets/images/biblio.jpg';
import Carousel from '../components/Carousel.vue';
import Modal_library from '../components/Modal_library.vue';
import Modal from './Modal.vue';
export default {
  components: {
    Modal,
    Modal_library,
    LibrosForm
  },
  data() {
    return {
      isModalVisible: false,
      isModalOpen: false,
      selectedBook: null,
      carouselImages: [img1],
      mostrarModal: false,
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    openModal(book) {
      this.selectedBook = book;
      this.isModalOpen = true;
      document.body.classList.add('no-scroll');
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedBook = null;
      document.body.classList.remove('no-scroll');
    },
    showModal() {
      this.isModalVisible = true;
      disableScroll();
    },
    hideModal() {
      this.isModalVisible = false;
      enableScroll();
    }
  }
};
</script>

<template>
  <Header v-if="!isModalOpen" />
  <Carousel :images="carouselImages" :carouselText="t('secciones.biblioteca')" />
  <div class="library-container">


    <!-- Sección de búsqueda -->
    <div class="search-section">
      <p class="search-text">Realiza tu búsqueda en este apartado:</p>
      <div class="search-input-container">
        <input type="text" v-model="searchTerm" placeholder="Coloca el nombre de un libro" class="search-input" />
        <button class="search-button" @click="performSearch">Buscar</button>
        <v-btn color="primary" @click="mostrarModal = true">
          <v-icon left><i class="bx bx-plus"></i></v-icon>
          Añadir Nuevo Libro
        </v-btn>
      </div>
    </div>

    <!-- Resultados de la búsqueda -->
    <div class="results-section">
      <div class="item-find" v-for="book in filteredBooks" :key="book.id_matbib">
        <div class="item-content" @click="openModal(book)">
          <div class="item-details">
            <p class="type-item">{{ book.type_matbib }}</p>
            <p class="title-item">{{ book.title_matbib }}</p>
            <p class="item-text">{{ book.author_matbib }}</p>
            <p class="item-text">{{ book.description_matbib }}</p>
          </div>
        </div>
        <div class="container-buttons">

          <button class="button-icon-editar" @click="mostrarModal = true">
            <i class='bx bxs-edit'></i>
          </button>
          <button class="button-icon-eliminar">
            <i class='bx bxs-trash'></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <button v-if="!isModalOpen" id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <LibrosForm v-if="mostrarModal" :show="mostrarModal" @close="mostrarModal = false" />
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Modal_library v-if="isModalOpen" :book="selectedBook" @close="closeModal" />

  <Footer />
</template>


<style scoped>
.no-scroll {
  overflow: hidden;
}

.library-container {
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

.home-image {
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
  letter-spacing: 2px;
  text-align: center;
}

.search-section {
  margin-top: 20px;
  text-align: center;
}

.search-text {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333
}

.search-input-container {
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
}

.search-input {
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.search-input {
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #333;
  outline: none;
}

.search-button {
  padding: 10px 20px;
  background-color: #1a4aa2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.results-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  padding: 10px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  /*width: 900px;*/
}

.item-find {
  padding: 15px;
  width: 1000px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item-content {
  display: block;
  width: 100%;
  position: relative;
}

.item-details {
  padding: 1em 1.5em;
  padding-left: 1.5em;
  z-index: 10;
  background-color: transparent;
  position: relative;
  transition: all .4s cubic-bezier(.25, .8, .25, 1);
  transform: translateZ(0);
}

.item-details .type-item {
  text-transform: uppercase;
  font-size: 15px;
  color: #666;
  font-weight: 600;
}

.item-details .title-item {
  font-weight: bold;
  color: #44707b;
  font-size: 20px;
}

.container-buttons {
  min-width: 0;
  z-index: 10;
  top: 0;
  right: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  transition: transform .3s cubic-bezier(.23, 1, .32, 1), opacity .2s;
  transform: translate(-4px);
  margin-right: 4px;
}

.button-item-library {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}

.button-icon-editar {
  font-size: 30px;
  color: var(--azul-principal);
  transition: color 0.3s ease-in-out;
}

.button-icon-eliminar {
  font-size: 30px;
  color: var(--azul-principal);
  transition: color 0.3s ease-in-out;
}

.button-icon-eliminar:hover {
  color: red;
}

.button-icon-editar:hover {
  color: var(--succes-verde)
}

.button-item-library {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}

.button-item-library {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}

#button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-size: 25px;
  width: 40px;
  height: 40px;
}

.item-text {
  color: #333;
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0;
}



.search-button:hover {
  background-color: #666;
  transform: translateY(-2px);
}



@media (max-width: 768px) {
  .results-section {
    flex-direction: column;
    align-items: center;
  }

  .results-section {
    width: 100%;
    max-width: 400px;
  }
}

.no-scroll {
  overflow: hidden;
  /* Desactiva el scroll en la página */
}
</style>