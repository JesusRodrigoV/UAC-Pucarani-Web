<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabase'

const libros = ref([])

async function getLibros() {
  const { data } = await supabase.from('libros').select()
  libros.value = data
}

onMounted(() => {
  getLibros()
})
</script>
<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
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

  <div class="library-container">
    <div class="image-container">
      <img src="@/assets/images/biblioteca.jpg" alt="UAC Biblioteca" class="home-image" />
      <div class="overlay">
        <h1 class="overlay-text">Biblioteca Digital</h1>
      </div>
    </div>

    <div class="search-section">
      <p class="search-text">Realiza tu búsqueda en este apartado:</p>
      <div class="search-input-container">
        <input type="text" placeholder="Coloca el nombre de un libro" class="search-input" />
        <button class="search-button">Buscar</button>
      </div>
    </div>

    <div class="results-section">
      <div class="item-find" v-for="libro in libros" :key="libro.id">
        <p class="item-text">{{ libro.tipo }}</p>
        <p class="item-text">{{ libro.titulo }}</p>
        <p class="item-text">{{ libro.autor }}</p>
        <p class="item-text">{{ libro.descripcion }}</p>
        <hr>
      </div>
    </div>
  </div>
  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Footer />
</template>

<style scoped>
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
  font-family: 'Helvetica Neue', Arial, sans-serif;
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

/*.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}*/
.search-input {
  transition: border-color 0.3s ease;
}
.search-input:focus {
  border-color: #333;
  outline: none;
}

.search-button {
  padding: 10px 20px;
  background-color: black;
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
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.item-text {
  color: #333;
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0;
}

.item-find:hover {
  background-color: #f0f8ff;
  border-color: #b0c4de;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}

.search-button:hover {
  background-color: #666;
  transform: translateY(-2px);
}



@media (max-width: 768px) {
  .results-section{
    flex-direction: column;
    align-items: center;
  }

  .results-section {
    width: 100%;
    max-width: 400px;
  }
}
</style>