<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
  },
  mounted() {
    setInterval(this.nextImage, 2000);
  },
};
</script>


<template>
  <div class="carousel">
    <button class="carousel-control prev" @click="prevImage">
      <i class='bx bx-chevron-left'></i>
    </button>
    <img :src="images[currentImageIndex]" alt="Imagen del carrusel" class="carousel-image" />
    <button class="carousel-control next" @click="nextImage">
      <i class='bx bx-chevron-right'></i>
    </button>
    <div class="overlay">
      <h1 class="overlay-text">UAC Pucarani</h1>
    </div>
  </div>
</template>


<style scoped>
.carousel {
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 1s ease-in-out;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 2rem;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out ;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
.carousel-control:hover{
  background-color: var(--amarillo);
  color: var(--azul-principal);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(23, 28, 47, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-text {
  color: white;
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  transition: transform 0.5s ease-in-out;
}
button{
  z-index: 100;
}
</style>
