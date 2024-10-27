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
    right: 20px;
    padding: 5px;
    background-color: #d3d3d3;
    color: #003366;
    border: none;
    border-radius: 30%;
    cursor: pointer;
    align-items: center;
    text-align: center;
    display: none;
    font-size: 20px;
    transition: background-color 0.3s ease-in-out;
    z-index: 50;
}

.scroll-to-top-btn:hover {
    background-color: #0055a5;
    color: white;
}

html {
    scroll-behavior: smooth;
}
</style>