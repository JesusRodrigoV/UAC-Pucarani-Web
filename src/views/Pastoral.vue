<script setup>
import { ref } from 'vue';
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Modal from './Modal.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useEventStore } from '../stores/pastoral/eventStore';

const { t } = useI18n();
const eventStore = useEventStore();

// Mostrar eventos de pastoral
eventStore.fetchEvents();

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
    <Carousel :images="carouselImages" :carouselText="t('secciones.pastoral')" />

    <div class="principal">
        <section class="info-pastoral">
            <h2>Información Pastoral</h2>
            <p>Descubre nuestras actividades y únete a nosotros en eventos significativos para el crecimiento espiritual
                y comunitario en la UAC Pucarani.</p>
            <section class="contact">
                <h2>Contacto de la Pastoral</h2>
                <p>Para cualquier duda o consulta, contáctanos:</p>
                <p><strong>Teléfono:</strong> +591 123 456789</p>
                <p><strong>Correo:</strong> pastoral@uacpucarani.edu.bo</p>
            </section>
        </section>

        <h2 class="testimonial-title">Eventos de pastoral</h2>
        <section class="testimonios-container" v-for="event in eventStore.events" :key="event.id">
            <div class="info-event">
                <p>{{ event.title_event }}</p>
                <p>{{ event.date_start }}</p>
                <p>{{ event.description_event }}</p>
                <p>{{ event.date_end }}</p>
            </div>
        </section>

        <section class="calendar-registration-container">
            <div class="izq">
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
            </div>
            <div class="derecha">
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
            </div>
        </section>



    </div>

    <!-- Modal para el calendario completo -->
    <Modal :visible="isModalVisible" @close="hideModal" />
    <Boton />
    <Footer />
</template>

<style scoped>
.principal {
    padding: 20px;
}

.info-pastoral {
    text-align: center;
    margin-bottom: 30px;
}

.info-pastoral h2 {
    color: var(--azul-principal);
    font-size: 2rem;
    font-weight: bold;
}

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

.calendar-registration-container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 20px;
    padding: 10px;
    margin: 50px 0;
}


.upcoming-events {
    max-width: 400px;
}

.upcoming-events h2 {
    font-size: 1.5rem;
    color: var(--azul-principal);
}



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




/* Formulario de Inscripción */
.registration-form input,
.registration-form select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Efecto al enfocar los campos */
.registration-form input:focus,
.registration-form select:focus {
    border-color: #66b2ff;
    box-shadow: 0 0 5px rgba(102, 178, 255, 0.5);
    outline: none;
}

/* Estilo del botón de envío */
.registration-form .submit-button {
    padding: 12px 20px;
    background-color: #005a99;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Efecto al pasar el cursor sobre el botón */
.registration-form .submit-button:hover {
    background-color: #003f6d;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}




/* Estilos generales para el formulario */
.registration-form {
    background: linear-gradient(135deg, #f0f4f8, #d9e7f1);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Estilo de los campos de entrada y selección */
.registration-form input,
.registration-form select {
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    position: relative;
}

/* Efecto de sombra y color al enfocar los campos */
.registration-form input:focus,
.registration-form select:focus {
    border-color: #66b2ff;
    box-shadow: 0 4px 8px rgba(102, 178, 255, 0.4);
    outline: none;
}

/* Iconos dentro de los campos de formulario */
.registration-form input[type="text"]::before,
.registration-form input[type="email"]::before,
.registration-form select::before {
    content: "✎";
    /* Cambia este símbolo según el campo */
    position: absolute;
    left: 10px;
    color: #aaa;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

/* Aumenta el padding para dejar espacio a los iconos */
.registration-form input[type="text"],
.registration-form input[type="email"],
.registration-form select {
    padding-left: 35px;
}

/* Botón de envío mejorado */
.registration-form .submit-button {
    padding: 12px 20px;
    background: linear-gradient(135deg, #005a99, #003f6d);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Efecto de flotación en el botón */
.registration-form .submit-button:hover {
    background: linear-gradient(135deg, #66b2ff, #003f6d);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}
.testimonios-container{
    display: block;
    align-items: center;
    justify-content: space-around;

    gap: 20px;
    padding: 10px;
    margin: 50px 0;
}
.testimonials-container {
    display: flex;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    padding: 20px;
    /* background-color: #f9f9f9; */
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.testimonial-title {
    display: block;
    color: var(--azul-principal);
    font-size: 1.2rem;
}



.testimonial-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    width: 25%;
    text-align: center;
    position: relative;

    cursor: default;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
}

.testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 69, 0, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
}

.testimonial-card:hover::before {
    opacity: 1;
}

.testimonial-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 4px solid #ffd700;
    transition: border-color 0.3s ease;
}

.testimonial-content {
    padding: 20px;
    transition: color 0.3s ease;
}

.testimonial-content h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #17242D;
    font-family: 'Arial Black', sans-serif;
}

.testimonial-content p {
    font-size: 16px;
    color: #555;
    font-style: italic;
    line-height: 1.6;
}
</style>
