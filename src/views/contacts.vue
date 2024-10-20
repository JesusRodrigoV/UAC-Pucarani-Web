<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<template>
    <Header />
    <div class="principal">
        <h1>UAC Pucarani</h1>
        <h2>Contactos</h2>
        <div>
            <iframe class="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.4928118535946!2d-68.47257293569423!3d-16.399266173090833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915eedf1827d78c3%3A0x27ecf35b8f5a874d!2sUniversidad%20Cat%C3%B3lica%20Carrera%20de%20Enfermer%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1729390977953!5m2!1ses-419!2sbo"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <Footer />
</template>

<style>
p {
    color: white;
}
</style>