<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>
<script>
import uacInicio from '@/assets/images/infra/principal.jpg';
import inicio2 from '@/assets/images/uac_inicio.jfif';
import i4 from '@/assets/images/enfe/enfe5.jpg';
import i5 from '@/assets/images/enfe/enfe6.jpg';

import i6 from '@/assets/images/fisio/fisio6.jpg';
import Carousel from '../components/Carousel.vue';

import studentImage1 from '@/assets/images/student.jfif';
import studentImage2 from '@/assets/images/student2.jfif';
import studentImage3 from '@/assets/images/student3.jpg';

import Boton from './Boton.vue';
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      carouselImages: [uacInicio, inicio2, i4, i5, i6],
      currentImageIndex: 0
    };
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    }
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
  { title: "Excelencia Académica", description: "Nos enfocamos en la excelencia académica a través de programas innovadores, impulsando el pensamiento crítico y la investigación." },
  { title: "Compromiso Social", description: "Fomentamos en nuestros estudiantes un sentido de responsabilidad social, alentándolos a contribuir activamente a sus comunidades." },
  { title: "Desarrollo Integral", description: "Promovemos el crecimiento integral de nuestros estudiantes, desarrollando habilidades tanto profesionales como personales para enfrentar los desafíos del mañana." },
  { title: "Inclusión y Diversidad", description: "Celebramos la diversidad cultural y promovemos un entorno inclusivo que respeta y valora a cada individuo." },
  { title: "Ética y Valores", description: "Formamos líderes con una sólida base ética, orientados a actuar con integridad y respeto en todos los aspectos de su vida." }
];



document.querySelectorAll('button').forEach(button => {
  const glow = document.createElement('div');
  glow.classList.add('glow');
  button.appendChild(glow);

  button.addEventListener('mouseenter', () => {
    glow.style.opacity = '1';
  });

  button.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  });
});

</script>

<template>
  <Header />
  <Carousel :images="carouselImages" carouselText="UAC Pucarani" />

  <section class="welcome-section">
    <div class="welcome-banner">
      <h1>Bienvenido a la UAC Pucarani</h1>
      <p>Explora un mundo de oportunidades educativas y de desarrollo personal en nuestra comunidad.</p>
    </div>

    <div class="welcome-content">
      <h2>Comprometidos con tu futuro</h2>
      <p>
        La Unidad Académica Campesina de Pucarani, parte de la Universidad Católica Boliviana "San Pablo", tiene la
        misión de formar
        profesionales comprometidos con el bienestar social, el desarrollo sostenible y la preservación de los valores
        comunitarios. Nuestro portal web
        ha sido diseñado para facilitar el acceso a recursos académicos, información institucional y servicios
        estudiantiles.
      </p>

      <h2>¡Únete a nuestra comunidad!</h2>
      <p>
        Ser parte de la UAC Pucarani es mucho más que estudiar. Es formar lazos, contribuir al desarrollo social, y
        construir un futuro mejor para todos.
        Explora nuestro portal, infórmate sobre nuestras actividades y servicios, y forma parte de nuestra misión de
        hacer del mundo un lugar mejor.
      </p>

    </div>
  </section>


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

  <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div>
      <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
      </span>
    </div>
    <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
    </p>
  </div>

  <button id="icon-container" class="icon-container" @click="showModal">
    <i class='bx bxs-calendar'></i>
  </button>
  <Modal :visible="isModalVisible" @close="hideModal"></Modal>
  <Boton />
  <Footer />
</template>

<style scoped>
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
  transition: transform 0.5s ease-in-out;
}

.overlay:hover .overlay-text {
  transform: translateY(-10px);
  /* Efecto de elevación del texto */
}



.calendar-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 20px;
}



/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
} */

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
  align-items: center;
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

  cursor: default;
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
  cursor: default;
  display: flex;
  justify-content: space-around;
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

.informacion-institucional {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  color: #333;
}

.descripcion h2,
.carreras h2 {
  color: #2a4d69;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.descripcion p,
.carrera p {
  text-align: justify;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.mision-vision-valores {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.mision-vision-valores div {
  flex: 1;
  background-color: #e9f5f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mision-vision-valores h3 {
  color: #1b3b5f;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.mision-vision-valores p,
.mision-vision-valores ul {
  font-size: 0.9rem;
  text-align: center;
  color: #555;
}

.mision-vision-valores ul {
  list-style-type: none;
  padding: 0;
}

.mision-vision-valores li {
  padding: 0.2rem 0;
}

.carreras {
  margin-top: 2rem;
}

.carrera {
  background-color: #f4f9fc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carrera h3 {
  color: #1b3b5f;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.welcome-section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.welcome-banner {
  background-color: var(--azul-principal);
  color: white;
  padding: 30px;
  border-radius: 8px;
}

.welcome-banner h1 {
  font-size: 2.5rem;
  margin: 0;
}

.welcome-banner p {
  font-size: 1.2rem;
  color: white;
  margin-top: 10px;
}

.welcome-content h2 {
  color: var(--azul-principal);
  font-size: 1.8rem;
  margin-top: 20px;
}

.welcome-content p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 10px 0;
}

.welcome-content ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

.welcome-content ul li {
  background-color: #f0f8ff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  color: #333;
}

.welcome-content ul li strong {
  color: var(--azul-principal);
}

.explore-button {
  background-color: var(--azul-principal);
  color: white;
  padding: 12px 25px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.explore-button:hover {
  background-color: var(--azul-hover);
}


@media (max-width: 768px) {
  .virtues-container {
    flex-direction: column;
  }

  .testimonials-container {
    flex-direction: column;
  }
}
</style>