<script setup>
import { ref } from 'vue';
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Modal from './Modal.vue';

const testimonials = ref([
    { text: "La pastoral me ha ayudado a fortalecer mi fe y encontrar un grupo de apoyo increíble.", author: "Juan Pérez, Estudiante" },
    { text: "Gracias a los retiros pastorales, he podido reflexionar sobre mi vida y encontrar propósito.", author: "María Sánchez, Estudiante" },
    { text: "Las actividades pastorales han sido esenciales para mi crecimiento personal y espiritual.", author: "Carlos Ruiz, Estudiante" }
]);

const isModalVisible = ref(false);

function showModal() {
    isModalVisible.value = true;
}

function hideModal() {
    isModalVisible.value = false;
}

const currentIndex = ref(0);

function nextTestimonial() {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
}

function previousTestimonial() {
    currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
}
</script>

<script>
import uacInicio from '@/assets/images/enfe/enfe1.jpg';
import inicio2 from '@/assets/images/enfe/enfe2.jpg';
import inicio3 from '@/assets/images/enfe/enfe3.jpg';
import inicio4 from '@/assets/images/enfe/enfe4.jpg';
import Carousel from '../components/Carousel.vue';
export default {
    data() {
        return {
            carouselImages: [uacInicio, inicio2, inicio3, inicio4],
        };
    },
};
</script>

<template>
    <Header />
    <Carousel :images="carouselImages" carouselText="Actividades Pastorales" />

    <div class="principal">
        <section class="info-pastoral">
            <h2>Información Pastoral</h2>
            <p>Descubre nuestras actividades y únete a nosotros en eventos significativos para el crecimiento espiritual
                y comunitario en la UAC Pucarani.</p>
        </section>

        <!-- Contenedor para el calendario y el formulario -->
        <section class="calendar-registration-container">
            <div class="upcoming-events">
                <h2>Calendario de Eventos Pastorales</h2>
                <ul>
                    <li>Misa de Bienvenida - <em>10 de Noviembre, 2024</em></li>
                    <li>Retiro Espiritual - <em>18 de Noviembre, 2024</em></li>
                    <li>Charla sobre valores - <em>25 de Noviembre, 2024</em></li>
                </ul>
                <button class="primary-button" @click="showModal">
                    Ver calendario completo
                </button>
            </div>

            <div class="registration-form">
                <h2>Formulario de Inscripción</h2>
                <form @submit.prevent>
                    <label for="name">Nombre Completo</label>
                    <input type="text" id="name" placeholder="Escribe tu nombre" required />

                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" placeholder="correo@ejemplo.com" required />

                    <label for="event">Selecciona el Evento</label>
                    <select id="event" required>
                        <option value="" disabled selected>Elige un evento...</option>
                        <option>Misa de Bienvenida</option>
                        <option>Retiro Espiritual</option>
                        <option>Charla sobre valores</option>
                    </select>

                    <button type="submit" class="primary-button">Inscribirse</button>
                </form>
            </div>
        </section>

        <!-- Testimonios -->
        <section class="testimonials">
            <h2>Testimonios</h2>
            <div class="testimonial-carousel">
                <button @click="previousTestimonial" class="carousel-btn">&lt;</button>
                <div class="testimonial-card">
                    <p>"{{ testimonials[currentIndex].text }}"</p>
                    <span>– {{ testimonials[currentIndex].author }}</span>
                </div>
                <button @click="nextTestimonial" class="carousel-btn">&gt;</button>
            </div>
        </section>

        <!-- Contacto de la Pastoral -->
        <section class="contact">
            <h2>Contacto de la Pastoral</h2>
            <p>Para cualquier duda o consulta, contáctanos:</p>
            <p><strong>Teléfono:</strong> +591 123 456789</p>
            <p><strong>Correo:</strong> pastoral@uacpucarani.edu.bo</p>
        </section>
    </div>

    <!-- Modal para el calendario completo -->
    <Modal :visible="isModalVisible" @close="hideModal" />
    <Boton />
    <Footer />
</template>

<style scoped>
/* Contenedor principal */
.principal {
    padding: 20px;
}

/* Información Pastoral */
.info-pastoral {
    text-align: center;
    margin-bottom: 30px;
}

.info-pastoral h2 {
    color: var(--azul-principal);
    font-size: 2rem;
    font-weight: bold;
}

/* Botones primarios */
.primary-button {
    padding: 10px 20px;
    color: #fff;
    background-color: var(--azul-principal);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.primary-button:hover {
    background-color: var(--azul-hover);
}

/* Formulario de Inscripción */
.registration-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.registration-form form {
    display: flex;
    flex-direction: column;
}

.registration-form label {
    margin-bottom: 5px;
    font-weight: bold;
}

.registration-form input,
.registration-form select {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Contenedor del calendario y formulario */
.calendar-registration-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin: 50px 0;
}

.upcoming-events {
    max-width: 400px;
}

.upcoming-events h2 {
    font-size: 1.5rem;
    color: var(--azul-principal);
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin: 10px 0;
}

/* Testimonios */
.testimonials {
    text-align: center;
    margin-top: 50px;
}

.testimonial-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.testimonial-card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-btn {
    font-size: 24px;
    color: var(--azul-principal);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
}

.carousel-btn:hover {
    color: var(--azul-hover);
}

/* Contacto */
.contact {
    text-align: center;
    margin-top: 50px;
    padding: 20px;
}

.contact h2 {
    color: var(--azul-principal);
    font-size: 1.8rem;
}
</style>
