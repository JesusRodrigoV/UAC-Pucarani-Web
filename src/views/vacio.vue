<script setup>
import Boton from './Boton.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Modal from './Modal.vue';
</script>
<template>
    <Header />
    <div class="princ">
        <v-tabs v-model="currentTab" align-tabs="center" color="deep-purple-accent-4">
            <v-tab>Noticias</v-tab>
            <v-tab>Libros</v-tab>
            <v-tab>Testimonios</v-tab>
        </v-tabs>
        <v-tabs-items v-model="currentTab" class="formularios">
            <v-tab-item>
                <tab1 v-if="currentTab === 0" />
            </v-tab-item>
            <v-tab-item>
                <tab2 v-if="currentTab === 1" />
            </v-tab-item>
            <v-tab-item>
                <tab3 v-if="currentTab === 2" />
            </v-tab-item>
        </v-tabs-items>
    </div>
    <Boton />
    <Footer />
</template>

<script>
import Tab1 from '../components/AdminForms/NoticiasForm.vue';
import Tab2 from '../components/AdminForms/LibrosForm.vue';
import Tab3 from '../components/AdminForms/TestimoniosForm.vue';

export default {
    components: {
        Tab1,
        Tab2,
        Tab3
    },
    data() {
        return {
            currentTab: 0
        }
    }
}
</script>

<style scoped>
/* Espaciado superior e inferior de la sección principal */
.princ {
    margin-top: 120px; /* Ajusta según el espacio que necesites del header */
    margin-bottom: 50px; /* Ajusta según el espacio que necesites del footer */
}

/* Espaciado interno de los items de las pestañas */
.v-tabs-items .v-tab-item {
    padding-top: 30px; /* Separación entre tabs y su contenido */
}

/* Opcional: Ajustes adicionales en el diseño de las pestañas */
.v-tabs {
    margin-bottom: 20px; /* Espaciado inferior de las pestañas respecto al contenido */
}
</style>
