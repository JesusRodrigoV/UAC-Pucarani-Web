<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<script>
import Boton from './Boton.vue';
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
    <div class="principal">
        <h1>Actividades Pastorales de la UAC Pucarani</h1>
        <section class="info-pastoral">
            <h2>Información Pastoral</h2>
            <p>Conoce nuestra misión y únete a nuestra comunidad en eventos significativos.</p>
            <!-- <img src="@/assets/pastoral_intro.jpg" alt="Imagen Pastoral" /> -->
        </section>

        <section class="calendar-section">
            <h2>Calendario de Eventos Pastorales</h2>
            <Calendar />

            <button id="icon-container" class="calendar-link" @click="showModal">
                Ver calendario completo
            </button>
        </section>

        <section class="upcoming-events">
            <h2>Próximas Actividades</h2>
            <!-- Lista de actividades con detalles -->
        </section>

        <section class="registration-form">
            <h2>Formulario de Inscripción</h2>
            <!-- Formulario con campos necesarios -->
        </section>

        <section class="testimonials">
            <h2>Testimonios</h2>
            <!-- Tarjetas de testimonios -->
        </section>

        <section class="contact">
            <h2>Contacto de la Pastoral</h2>
            <!-- Información de contacto y formulario de mensaje rápido -->
        </section>

        <section class="gallery">
            <h2>Galería de Imágenes</h2>
            <!-- Galería de fotos de eventos -->
        </section>
    </div>
    <button id="icon-container" class="icon-container" @click="showModal">
        <i class='bx bxs-calendar'></i>
    </button>
    <Modal :visible="isModalVisible" @close="hideModal"></Modal>
    <Boton />
    <Footer></Footer>
</template>

<style>
.calendar-link{
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: var(--azul-principal);
    cursor: pointer;
}
.calendar-link:hover{
    color: var(--azul-hover);
}
</style>