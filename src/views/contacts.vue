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
            name: "ContactSection"
        };
    },
};
</script>


<template>
    <Header />
    <Carousel :images="carouselImages" :carouselText="t('secciones.contactos')" />
    <div class="principal">
        <h1 class="titulo-con">UAC Pucarani</h1>
        <h2 class="titulo-h2">Contactos</h2>
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
            <div class="info-item">

                <h3>Acceso desde Distintas Localidades</h3>

                <p><strong>Desde El Alto:</strong> 70 km (~1h 30m)</p>
                <p><strong>Desde Batallas:</strong> 15 km (~20m)</p>

            </div>
        </div>

        <div class="map-container">
            <iframe class="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.4928118535946!2d-68.47257293569423!3d-16.399266173090833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915eedf1827d78c3%3A0x27ecf35b8f5a874d!2sUniversidad%20Cat%C3%B3lica%20Carrera%20de%20Enfermer%C3%ADa!5e0!3m2!1ses-419!2sbo&maptype=satellite"
                width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

        <!-- Formulario de contacto -->
        <!-- <form class="contact-form" action="submit-form.php" method="POST">
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
        </form> -->

        <div class="social-media">
            <h3>Encuéntranos en Nuestras Redes Sociales</h3>

        </div>
        <span class="social-media-buttons">
            <span class="social-media-button">
                <a href="https://www.youtube.com/TU-ENLACE" target="_blank">
                    <i class='bx bxl-youtube'></i>
                </a>
            </span>
            <span class="social-media-button">
                <a href="https://www.pinterest.com/TU-ENLACE" target="_blank">
                    <svg class="x" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1"
                        viewBox="0 0 24 24">
                        <path
                            d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
                    </svg>
                </a>
            </span>
            <span class="social-media-button">
                <a href="https://www.tiktok.com/@TU-ENLACE" target="_blank">
                    <i class='bx bxl-tiktok'></i>
                </a>
            </span>
        </span>
        <a href="https://www.facebook.com/uacucb.pucarani/" class="facebook-link-1" target="_blank">
            <i class='bx bxl-facebook'></i>
            <div>Enfermería</div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100077839208489&mibextid=ZbWKwL" class="facebook-link-2"
            target="_blank">
            <i class='bx bxl-facebook'></i>
            <div>Fisiología y kinesiología</div>
        </a>


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

a {
    text-decoration: none;
}
.titulo-con {
    color: var(--azul-principal);
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.titulo-h2 {
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

.principal{
    text-align: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
}
.background {
    background: var(--background);
    display: grid;
    place-items: center;
    height: 100vh;
}

.social-media-buttons {
    margin: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.social-media-button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 30px;
    color: white;
    outline: 2px solid var(--azul-principal);
    cursor: pointer;
    transition: all 0.3s;
    display: grid;
    place-items: center;
}

.social-media-button:hover {
    outline-offset: 3px;
    transition: all 0.3s;
    color: white;
}

.social-media-button i,
.social-media-button svg {
    color: inherit;
    fill: inherit;
}

.social-media-button a {
    color: black;
    fill: black;
    transition: color 0.3s ease, fill 0.3s ease;
}

.social-media-button img {
    transition: all 0.3s;
}

.social-media-button a:hover {
    color: white;
    fill: white;
}

.social-media-button:hover img {
    transform: scale(1.15);
    fill: white;
}

.social-media-button:hover:nth-child(3) {
    background-color: #2E004F;
    color: white;
}

.social-media-button:hover:nth-child(2) {
    background: var(--twitter);
    color: white;
    fill: white;
}

.social-media-button:hover:nth-child(1) {
    background: var(--youtube);
    color: white;
}

.social-media-button:hover:nth-child(4) {
    background: var(--linkedin);
    color: white;
}

.map-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.mapa {
    width: 100%;
    height: 350px;
    border: 0;
}

.x {
    width: 25px;
}

.facebook-link-1,
.facebook-link-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4267B2;
    text-decoration: none;
    padding: 10px;
    transition: color 0.4s ease-in-out;
}

.facebook-link-1 i,
.facebook-link-2 i {
    font-size: 24px;
    margin-bottom: 5px;
}

.facebook-link-1:hover,
.facebook-link-2:hover {
    color: #333;
}

.contact-section {
    max-width: 1200px;
    margin: auto;
}

.info-card,
.map-card {
    text-align: center;
}

.input-field {
    transition: border-color 0.2s;
}

.input-field:focus {
    outline: none;
    border-color: #3b82f6;
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