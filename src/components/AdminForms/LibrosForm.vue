<!-- LibrosForm.vue -->
<template>
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="type">Tipo de Material</label>
            <input v-model="newBook.type_matbib" id="type" required />
          </div>
          <div>
            <label for="title">Título</label>
            <input v-model="newBook.title_matbib" id="title" required />
          </div>
          <div>
            <label for="author">Autor</label>
            <input v-model="newBook.author_matbib" id="author" required />
          </div>
          <div>
            <label for="isbn">ISBN</label>
            <input v-model="newBook.isbn_matbib" id="isbn" required />
          </div>
          <div>
            <label for="description">Descripción</label>
            <textarea v-model="newBook.description_matbib" id="description"></textarea>
          </div>
          <button type="submit">Guardar</button>
          <button class="cerrar" @click="$emit('close')">Cancelar</button>
        </form>
      </div>
    </div>
  </template>  


<script>
import { ref } from 'vue';
import { useBookStore } from '../../stores/library/bookStore';
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
            title: '',
            author: '',
            isbn: '',
            language: '',
            description: '',
            summary: '',
            collaborators: '',
            file: null,
            isFormValid: false,
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        createBook() {
            // Lógica para agregar el libro
            console.log("Libro agregado:", {
                title: this.title,
                author: this.author,
                isbn: this.isbn,
                language: this.language,
                description: this.description,
                summary: this.summary,
                collaborators: this.collaborators,
                file: this.file
            });
            this.closeModal();
        }
    },
    setup() {
        const store = useBookStore();
        const newBook = ref({
            type_matbib: '',
            title_matbib: '',
            author_matbib: '',
            isbn_matbib: '',
            description_matbib: '',
        });

        const handleSubmit = async () => {
            try {
                store.newBook = { ...newBook.value };
                await store.addBook();
                newBook.value = {
                    type_matbib: '',
                    title_matbib: '',
                    author_matbib: '',
                    isbn_matbib: '',
                    description_matbib: '',
                };
            } catch (error) {
                console.error('Error al guardar el libro:', error);
            }
        };

        return {
            newBook,
            handleSubmit,
        };
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
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    /* Fondo oscuro semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    /* Asegura que esté por encima de otros elementos */
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 500px;
}

form div {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
}

button[type="submit"] {
    background-color: var(--azul-principal);
    transition: background-color 0.4s ease-in-out;
    color: white;
}
button[type="submit"]:hover {
    background-color: var(--azul-hover);
    color: white;
}

button[type="button"] {
    background-color: #ccc;
    color: black;
}
.cerrar{
    color:black;
    transition: color 0.4s ease-in-out;
}
.cerrar:hover{
    color: red;
}
</style>