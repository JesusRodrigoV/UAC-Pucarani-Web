<script setup>
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();
</script>
<script>
import uacInicio from '@/assets/images/inicio.jpg';
import Carousel from '../components/Carousel.vue';
export default {
    data() {
        return {
            carouselImages: [uacInicio],
        };
    },
};
</script>
<template>
    <Header />
    <Carousel :images="carouselImages" :carouselText="t('secciones.contactos')" />
    <div class="principal">
        <h1>UAC Pucarani</h1>
        <h2>Contactos</h2>
        <div class="contact-info">
            <div class="info-item">
                <h3>Teléfonos</h3>
                <p>Línea principal: +591 2-2895160</p>
                <p>Enfermería: 67304957 <br>
                    Fisioterapia y Kinesiología: 64173898</p>
            </div>

            <div class="info-item">
                <h3>Correo Electrónico</h3>
                <p><a href="mailto:uac.pucarani.enf.fsk@gmail.com">uac.pucarani.enf.fsk@gmail.com</a></p>
                <p><a href="mailto:uacpucarani@uacucb.edu.bo">uacpucarani@uacucb.edu.bo</a></p>
            </div>

            <div class="info-item">
                <h3>Dirección</h3>
                <p>Unidad Académica Campesina<br>Universidad Católica Boliviana "San Pablo"<br>Av. Avaroa S/N <br>
                    Pucarani, Provincia Los Andes <br> La Paz, Bolivia.</p>
            </div>

            <div class="info-item">
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                <p>Sábado: 8:00 AM - 1:00 PM</p>
            </div>
        </div>

        <!-- Mapa interactivo -->
        <div class="map-container">
            <iframe class="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.4928118535946!2d-68.47257293569423!3d-16.399266173090833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915eedf1827d78c3%3A0x27ecf35b8f5a874d!2sUniversidad%20Cat%C3%B3lica%20Carrera%20de%20Enfermer%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1729390977953!5m2!1ses-419!2sbo"
                width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Formulario de contacto -->
        <form class="contact-form" action="submit-form.php" method="POST">
            <input type="text" name="nombre" placeholder="Nombre Completo" required>
            <input type="email" name="email" placeholder="Correo Electrónico" required>
            <select name="asunto" required>
                <option value="">Seleccionar Asunto</option>
                <option value="admisiones">Admisiones</option>
                <option value="informacion_general">Información General</option>
                <option value="eventos">Eventos</option>
                <option value="otros">Otros</option>
            </select>
            <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
            <button type="submit">Enviar Mensaje</button>
        </form>

        <!-- Redes Sociales -->
        <div class="social-media">
            <h3>Encuéntranos en Facebook</h3>
            <a href="https://www.facebook.com/carrera1" target="_blank">Enfermería - UAC UCB</a>
            <a href="https://www.facebook.com/carrera2" target="_blank">Fisiología y kimeología - UAC UCB</a>
        </div>

    </div>
    <button id="icon-container" class="icon-container" @click="showModal">
        <i class='bx bxs-calendar'></i>
    </button>
    <Modal :visible="isModalVisible" @close="hideModal"></Modal>
    <Boton />
    <Footer></Footer>
</template>

<style>
p {
    color: black;
}


.map-container {
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.mapa {
    width: 100%;
    height: 350px;
}

@media (max-width: 768px) {
    .map-container {
        padding: 0 10px;
    }

    .mapa {
        height: 250px;
    }
}
</style>
<style src="src/style.css"></style>