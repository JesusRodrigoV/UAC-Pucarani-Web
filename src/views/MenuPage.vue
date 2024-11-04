<script setup>
import Header from './Header.vue';

</script>

<template>
  <div class="menu-page">
    <Header />
    <div class="content">
      <nav class="nav-links">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/careers" class="nav-link">Carreras</RouterLink>
        <RouterLink to="/library" class="nav-link">Biblioteca</RouterLink>
        <RouterLink to="/content" class="nav-link">Contenido</RouterLink>
        <RouterLink to="/jobBank" class="nav-link">Bolsa de trabajo</RouterLink>
        <RouterLink to="/contacts" class="nav-link">Contactos</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.menu-page {
  background-image: url('../assets/images/fondoazul.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.9);
}

.content {
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  margin-top: 20px;
  padding-left: 30px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
}

.nav-link {
  font-size: 4.3rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 0.8s ease forwards;
  position: relative;
}
.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 3px;
  background: #fff;
  width: 0;
  transition: width 0.3s;
  transform: translateX(-50%);
}


.nav-link:hover::after {
  width: 100%;
}


.nav-link:hover {
  color: #add8e6;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link:nth-child(1) { animation-delay: 0.2s; }
.nav-link:nth-child(2) { animation-delay: 0.4s; }
.nav-link:nth-child(3) { animation-delay: 0.6s; }
.nav-link:nth-child(4) { animation-delay: 0.8s; }
.nav-link:nth-child(5) { animation-delay: 1s; }
.nav-link:nth-child(6) { animation-delay: 1.2s; }
.nav-link:nth-child(7) { animation-delay: 1.4s; }


.content::-webkit-scrollbar {
  width: 10px;
}

.content::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
}

.content::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
