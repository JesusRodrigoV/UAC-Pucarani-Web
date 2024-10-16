<template>
    <div class="carousel">
      <div class="carousel-image">
        <img src="@/assets/images/UAC UCB.png" alt="Biblioteca Digital UAC Pucarani">
        <div class="carousel-text">
          <h1>Biblioteca Digital UAC Pucarani</h1>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel'
  }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    max-width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .carousel-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .carousel-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .carousel-text h1 {
    font-size: 2.5em;
  }
  </style>
  