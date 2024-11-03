<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';

</script>
<script>
import studentImage1 from '@/assets/images/student.jfif';
import studentImage2 from '@/assets/images/student2.jfif';
import studentImage3 from '@/assets/images/student3.jpg';

import Boton from './Boton.vue';
import Modal from './Modal.vue';



import inicio2 from '@/assets/images/inicio2.jpg';
import inicio3 from '@/assets/images/inicio3.jpg';
import inicio4 from '@/assets/images/inicio4.jfif';
import uacInicio from '@/assets/images/uac_inicio.jfif';


const carouselImages = [uacInicio, inicio2, inicio3, inicio4];
export default {
  components: {
    Modal
  },
  data() {
   return {
      isModalVisible: false,
      currentImageIndex: 0
   };
},

  methods: {
   showModal() {
      this.isModalVisible = true;
   },
   hideModal() {
      this.isModalVisible = false;
   },
   nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % carouselImages.length;
   },
   prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
   }
},

  mounted() {
    setInterval(this.nextImage, 8000);
  },

};


const testimonials = [
  {
    name: "Alejandro Auza",
    text: "Ser parte de la comunidad de la U.C.B. es ¡súper! Es como una gran familia. Hay apoyo, no solo entre paralelos o compañeros, sino también del personal administrativo. Siento que es como una casa, y eso es muy bonito. La relación que tengo con los docentes es muy buena. Gracias a Dios, la universidad se ha encargado de seleccionar docentes súper capacitados, que saben realmente cómo hacer que te enamores de la carrera. Estoy muy agradecida con ellos.",
    image: studentImage1
  },
  {
    name: "Fernanda Alexandra Flores",
    text: "La UCB me ha brindado oportunidades increíbles para crecer tanto académica como personalmente. Los recursos y el apoyo que recibimos son excepcionales. He podido participar en investigaciones que me han permitido destacar en el ámbito internacional. Estoy muy orgulloso de ser parte de esta universidad.",
    image: studentImage2
  },
  {
    name: "Carolina Viscarra Pabon",
    text: "Estudiar en la UCB ha sido una experiencia transformadora. Los profesores son muy dedicados y siempre están dispuestos a ayudarte a alcanzar tu máximo potencial. Además, la universidad ofrece muchas oportunidades para mostrar tu trabajo y conectarte con profesionales del campo.",
    image: studentImage3
  }
];


const virtues = [
  { title: "Excelencia Académica", description: "La universidad se destaca por su alto nivel académico y programas innovadores." },
  { title: "Compromiso Social", description: "Fomentamos el compromiso y la responsabilidad social en todos nuestros estudiantes." },
  { title: "Desarrollo Integral", description: "Promovemos el crecimiento integral de nuestros estudiantes, preparándolos para los retos del futuro." },
  { title: "Desarrollo Social", description: "Promovemos el crecimiento integral de nuestros estudiantes, preparándolos para los retos del futuro." },
  // virtudes
];




</script>

<template>
  <Header />

  <div class="home-container">
  <div class="carousel">
    <button class="carousel-control prev" @click="prevImage">‹</button>
    <img :src="carouselImages[currentImageIndex]" alt="UAC Carrusel" class="carousel-image" />
    <button class="carousel-control next" @click="nextImage">›</button>
    <div class="overlay">
      <h1 class="overlay-text">Unidad Académica Campesina Pucarani</h1>
    </div>
  </div>
</div>


  <div class="testimonials-container">
  <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
    <img :src="testimonial.image" :alt="testimonial.name" class="testimonial-image" />
    <div class="testimonial-content">
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.text }}</p>
    </div>
  </div>
</div>

<div class="virtues-container">
  <div class="virtue-card" v-for="(virtue, index) in virtues" :key="index">
    <h3>{{ virtue.title }}</h3>
    <p>{{ virtue.description }}</p>
  </div>
</div>




  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Boton />
  <Footer />
</template>

<style scoped>
.carousel {
  position: relative;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 1s ease-in-out; /* transición de opacidad */
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
  z-index: 1;
  transition: background 0.3s ease, transform 0.3s ease;
  border-radius: 40%; /* Redondea los bordes para dar un aspecto de círculo */
}

.carousel-control:hover {
  background: rgba(255, 215, 0, 0.8); /* Cambia el fondo al pasar el cursor */
  transform: scale(1.1); /* Aumenta el tamaño ligeramente */
}

.carousel:hover .overlay {
  background-color: rgba(23, 28, 47, 0.6);
}


.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

/*carousel eff*/

.carousel-image-enter-active,
.carousel-image-leave-active {
  transition: opacity 1s ease-in-out;
}

.carousel-image-enter, 
.carousel-image-leave-to /* .carousel-image-leave-active en Vue 2 */ {
  opacity: 0;
}



.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(23, 28, 47, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-text {
  color: white;
  font-size: 48px;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 2px;
  text-align: center;
  transition: transform 0.5s ease-in-out; /* Transición de suavidad */
}

.overlay:hover .overlay-text {
  transform: translateY(-10px); /* Efecto de elevación del texto */
}



.calendar-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 20px;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.logo-container {
  position: fixed;
  top: 25px;
  left: 20px;
  z-index: 9999;
}

.uac-logo {
  width: 100px;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

 .uac-logo {
  transform: translateY(10px);
}

/*Testimonio*/
.testimonials-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.testimonials-container:hover {
  background-color: #f3f3f3;
}

.testimonial-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  width: 300px;
  text-align: center;
  position: relative;
  cursor: pointer;
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


/*Virtudes*/
.virtues-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease;
  overflow: hidden;
  position: relative;
}

.virtues-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.2), transparent);
  opacity: 0.5;
  z-index: -1;
}

.virtue-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  text-align: center;
}

.virtue-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #ffefd5;
}

.virtue-card h3 {
  font-size: 22px;
  color: #1a3c58;
  font-weight: bold;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.virtue-card:hover h3 {
  color: #ff8c00;
}

.virtue-card p {
  font-size: 16px;
  color: #555;
  line-height: 1.4;
}



</style>