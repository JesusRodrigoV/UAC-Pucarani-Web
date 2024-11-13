<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2 v-if="!isEditMode">Crear Noticia</h2>
      <h2 v-if="isEditMode">Editar Noticia</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="holder_news">Título de la noticia:</label>
          <input type="text" id="holder_news" v-model="newsForm.holder_news" required />
        </div>
        <div>
          <label for="image_news">URL de la imagen:</label>
          <input type="text" id="image_news" v-model="newsForm.image_news" />
        </div>
        <div>
          <label for="date_news">Fecha:</label>
          <input type="date" id="date_news" v-model="newsForm.date_news" required />
        </div>
        <div>
          <label for="summary_news">Resumen:</label>
          <textarea id="summary_news" v-model="newsForm.summary_news" required></textarea>
        </div>
        <div>
          <button type="submit">{{ isEditMode ? 'Actualizar Noticia' : 'Crear Noticia' }}</button>
        </div>
      </form>
      <button @click="cancelEdit">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useNewsStore } from '../../stores/news/newsStore.js';

const props = defineProps({
  show: Boolean,
  newsToEdit: Object
});

const emit = defineEmits(['close']);

const store = useNewsStore();
const newsForm = ref({
  holder_news: '',
  image_news: '',
  date_news: '',
  summary_news: ''
});

const isEditMode = computed(() => !!props.newsToEdit);

// If we're editing, prefill the form with the current news data
if (isEditMode.value) {
  newsForm.value = { ...props.newsToEdit };
}

const submitForm = async () => {
  if (isEditMode.value) {
    await store.updateExistingNews(newsForm.value);
  } else {
    await store.addNews(newsForm.value);
  }
  emit('close');
};

const cancelEdit = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que el modal esté encima de otros elementos */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%; /* Asegura que no ocupe más del 90% de la pantalla */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 15px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
