<template>
    <button id="scrollToTopBtn" class="scroll-to-top-btn" @click="scrollToTop">
        <i class='bx bxs-up-arrow'></i>
    </button>
</template>

<script>
export default {
    mounted() {
        window.onscroll = this.toggleScrollToTopBtn;
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        toggleScrollToTopBtn() {
            const btn = document.getElementById("scrollToTopBtn");
            if (window.scrollY > 200) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        }
    }
};
</script>

<style>
.scroll-to-top-btn {
    position: fixed;
    bottom: 25px;
    right: 25px;
    padding: 10px;
    background-color: #d3d3d3;
    color: #003366;
    border: none;
    border-radius: 35%;
    cursor: pointer;
    align-items: center;
    text-align: center;
    display: none;
    /* Inicialmente oculto */
    font-size: 20px;
    /* Cambia el tamaño del icono */
    transition: background-color 0.3s;
    z-index: 100;
}

.scroll-to-top-btn:hover {
    background-color: #0055a5;
    color: white;
}

/* Animación suave de deslizamiento */
html {
    scroll-behavior: smooth;
}
</style>