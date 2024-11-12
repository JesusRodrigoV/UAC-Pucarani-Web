<template>
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <v-card class="pa-5">
                <div class="cerrar">
                    <button @click="closeModal"><i class='bx bx-x'></i></button>
                </div>

                <v-form ref="form" v-model="isFormValid" @submit.prevent="createBook">
                    <h2>Agregar Nuevo Libro</h2>
                    <div class="container-id">
                        <div class="iz-der">
                            <div class="izquierda">
                                <v-text-field v-model="title" label="Título" :rules="[v => !!v || 'Título requerido']"
                                    required></v-text-field>

                                <v-text-field v-model="author" label="Autor" :rules="[v => !!v || 'Autor requerido']"
                                    required></v-text-field>

                                <v-text-field v-model="isbn" label="ISBN" :rules="[v => !!v || 'ISBN requerido']"
                                    required></v-text-field>

                                <v-text-field v-model="language" label="Idioma" required></v-text-field>
                                <v-textarea v-model="description" label="Descripción" required></v-textarea>
                            </div>
                            <div class="derecha">
                                

                                <v-textarea v-model="summary" label="Resumen" required></v-textarea>

                                <v-textarea v-model="collaborators" label="Colaboradores" required></v-textarea>

                                <v-file-input v-model="file" label="Subir PDF" accept=".pdf"
                                    :rules="[v => !!v || 'Archivo requerido']" required></v-file-input>
                            </div>
                        </div>
                        <div class="centered">
                            <v-btn type="submit" color="primary" :disabled="!isFormValid">
                                Subir Libro
                            </v-btn>
                        </div>
                    </div>


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

.container-id {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.iz-der {
    display: flex;
    width: 100%;
}

.izquierda,
.derecha {
    flex: 1;
    padding: 10px;
    text-align: center;
}

.centered {
    margin-top: 5px;
    padding: 5px;
    text-align: center;
}
</style>