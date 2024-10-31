<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Boton from './Boton.vue';
import Modal from './Modal.vue';
import { ref } from 'vue'; 

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

<template>
    <Header />

    <div class="principal">
        <!-- Banner con imagen y texto de bienvenida -->
        <div class="home-container">
            <div class="image-container">
                <img src="@/assets/images/enfe/enfe1.jpg" alt="Actividades Pastorales" class="home-image" />
                <div class="overlay">
                    <h1 class="overlay-text">Actividades Pastorales</h1>
                </div>
            </div>
        </div>

        <!-- Sección de información pastoral -->
        <section class="info-pastoral">
            <h2>Información Pastoral</h2>
            <p>Descubre nuestras actividades y únete a nosotros en eventos significativos para el crecimiento espiritual
                y comunitario en la UAC Pucarani.</p>
        </section>


        <!-- Próximas Actividades -->
        <section class="upcoming-events">
            <h2>Calendario de Eventos Pastorales</h2>
            <ul>
                <li>Misa de Bienvenida - <em>10 de Noviembre, 2024</em></li>
                <li>Retiro Espiritual - <em>18 de Noviembre, 2024</em></li>
                <li>Charla sobre valores - <em>25 de Noviembre, 2024</em></li>
            </ul>
            <button class="calendar-link" @click="showModal">
                Ver calendario completo
            </button>
        </section>

        <!-- Formulario de Inscripción -->
        <section class="registration-form">
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

                <button type="submit" class="submit-button">Inscribirse</button>
            </form>
        </section>

        <!-- Testimonios -->
        <section class="testimonials">
            <h2>Testimonios</h2>
            <div class="carousel">
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

        <!-- Galería de Imágenes -->
        <section class="gallery">
            <h2>Galería de Imágenes</h2>
            <div class="gallery-grid">
                <!-- <img src="@/assets/images/pastoral1.jpg" alt="Evento Pastoral" />
                <img src="@/assets/images/pastoral2.jpg" alt="Actividades Comunitarias" />
                <img src="@/assets/images/pastoral3.jpg" alt="Reuniones de Reflexión" /> -->
            </div>
        </section>
    </div>

    <!-- Icono de calendario en pantalla flotante -->
    <button class="icon-container" @click="showModal">
        <i class="bx bxs-calendar"></i>
    </button>

    <!-- Modal para el calendario completo -->
    <Modal :visible="isModalVisible" @close="hideModal" />
    <Boton />
    <Footer />
</template>

<style>


.home-container {
    display: flex;
    justify-content: center;
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
    border-radius: 8px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
    background-color: rgba(23, 28, 47, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.overlay-text {
    color: white;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
}


/* Formulario de Inscripción */
.registration-form {
    max-width: 600px;
    margin: 0 auto;
}

.registration-form form {
    display: flex;
    flex-direction: column;
}

.registration-form label,
.registration-form input,
.registration-form select,
.submit-button {
    margin-bottom: 10px;
}
.calendar-link,
.submit-button {
    display: inline-block;
    padding: 10px 20px;
    color: white;
    background-color: var(--azul-principal);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}
.calendar-link:hover,
.submit-button:hover {
    background-color: var(--azul-hover);
}


.testimonials {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.carousel {
    display: flex;
    align-items: center;
    gap: 20px;
}

.testimonial-card {
    flex: 1;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.carousel-btn {
    font-size: 24px;
    color: #555;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
}

.carousel-btn:hover {
    color: #007bff;
}



/* Galería */
.gallery-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.gallery-grid img {
    border-radius: 8px;
}
ul {
  list-style-type: none;
  padding: 10px;
  margin: 0;
}

</style>
