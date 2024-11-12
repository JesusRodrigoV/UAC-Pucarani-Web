<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <v-card class="pa-5">
        <div class="cerrar">
          <button @click="closeModal"><i class='bx bx-x'></i></button>
        </div>

        <v-form ref="form" v-model="isFormValid" @submit.prevent="handleSubmit">
          <h2>Agregar Nueva Noticia</h2>

          <v-text-field v-model="news.title" label="Título" :rules="[v => !!v || 'Título requerido']"
            required></v-text-field>

          <v-textarea v-model="news.content" label="Contenido" :rules="[v => !!v || 'Contenido requerido']"
            required></v-textarea>

          <div>
            <v-menu ref="menu" v-model="menu" 
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
              >
              
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="news.date" 
                  label="Fecha de Publicación"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>
              </template>
              <v-date-picker v-model="news.date" 
                @input="menu = false" 
                ></v-date-picker>
            </v-menu>
          </div>


          <v-file-input v-model="news.image" label="Subir Imagen" accept="image/*"
            :rules="[v => !!v || 'Imagen requerida']" required></v-file-input>

          <v-btn type="submit" color="primary" :disabled="!isFormValid">
            <i class='bx bx-list-check'></i>
            Publicar Noticia
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>


<script>
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

export default {
  props: ['show'],
  data() {
    return {
      news: {
        title: '',
        content: '',
        date: '',
        image: null,
      },
      inputValue: '',
      isFormValid: false,
      menu: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleSubmit() {
      // Lógica de envío del formulario
      console.log("Formulario enviado", this.inputValue);
      this.closeModal();
    },
    resetForm() {
      this.news.title = '';
      this.news.content = '';
      this.news.date = '';
      this.news.image = null;
      this.isFormValid = false;
      this.$refs.form.reset();
    },
  },
  mounted() {
    disableScroll();
    document.body.classList.add('no-scroll');
  },
  beforeUnmount() {
    enableScroll();
    document.body.classList.remove('no-scroll');
  }
};
</script>

<style scoped>
i {
  font-size: 30px;
  margin: 2px;
}

.v-card {
  z-index: 20000;
}

.algo {
  z-index: 35000;
}

.v-menu {
  z-index: 30000;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 50%;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 20000;
}

.cerrar {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 30px;
  transition: color 0.3s ease-in-out;
}

.cerrar:hover {
  color: red;
}
</style>