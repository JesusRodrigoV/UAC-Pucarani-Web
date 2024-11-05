<template>
  <div class="modal-overlay">
    <div class="container-buttons">
      <div class="close-button">
        <button class="button-close-modal-overlay" @click="closeModal">
          <i class='bx bx-x'></i>
        </button>
      </div>
    </div>
    <div class="modal-content">
      <p class="type-item">{{ book.type_matbib || 'Tipo Desconocido' }}</p>
      <h3 class="title-item">{{ book.title_matbib || 'Título Desconocido' }}</h3>
      <p class="item-text">{{ book.description_matbib }}</p>
      <!-- botón para descargar -->
      <button class="button-download" @click="downloadPdf(book.filename)">
        <div class="icon-text">
          <i class='bx bxs-file-pdf'></i>
          <span>Descargar PDF</span>
        </div>
      </button>

      <p class="title-details">Detalles </p>
      <hr>
      <p class="item-text">Título: {{ book.title_matbib }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
      document.body.classList.remove('no-scroll');
    },
    downloadPdf(filename) {
      const url = `http://localhost:3000/pdfs/download/${filename}`;
      window.open(url, '_blank');
    },
    closeModal() {
      document.body.classList.remove('no-scroll'); // Quitar clase al cerrar modal
      this.$emit('close');
    },
    openModal() {
      document.body.classList.add('no-scroll'); // Agregar clase al abrir modal
    },
  },

};
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh !important;
  position: fixed !important;
  top: 0 !important;
  display: flex;
  left: 0;
  width: 100%;
  z-index: 200;
  justify-content: center;
  align-items: center;
}


.container-buttons {
  display: flex;
  align-items: center;
  justify-content: center;

}

.close-button {
  display: flex;
  width: 130px;
}

.button-close-modal-overlay {
  font-size: 100px;
  color: rgb(255, 0, 0);
  transition: color 0.5s ease-in-out;
}

.button-close-modal-overlay:hover {
  color: rgb(150, 0, 0);
}

.modal-overlay .button-close-modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bx.bx-window-close {
  font-size: 100px;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  height: auto;
  width: 90%;
  max-width: 870px;
  margin: 0 ;
  position: relative;
}

.modal-content .type-item {
  text-transform: uppercase;
  font-size: 15px;
  color: #666;
  font-weight: 600;
}

.modal-content .title-item {
  font-weight: bold;
  color: #44707b;
  font-size: 20px;
}

.modal-content .item-text {
  color: #333;
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0;
}

/* Estilos para los botones de subir y descargar */
.pdf-buttons {
  margin-top: 20px;
}

.modal-content .button-download {
  border-radius: 10px;
}

.button-download .icon-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.icon-text .bx.bxs-file-pdf {
  font-size: 17px;
}

.icon-text span {
  font-size: 14px;
  font-weight: 600;
}

.button-upload {
  background-color: green;
  color: white;
}

.button-download:hover {
  background-color: #e7c100;
}

.status-message {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

body.no-scroll {
  overflow: hidden;
}
</style>
