<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const headerTransparent = ref(true);
const headerHidden = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


<template>




    <header :class="['header', { 'transparent': headerTransparent, 'hidden': headerHidden }]">
    <div class="header-left">
      <RouterLink to="/">
        <img src="../assets/images/logoHorizontalAzulUAC.png" alt="Logo UAC" class="logo-uac" />
      </RouterLink>
    </div>

    <div class="menu-icon" @click="toggleMenu">
      <i class='bx bx-menu'></i>
    </div>

    <!-- Enlaces de navegación -->
    <nav :class="['nav-links', menuOpen ? 'show' : '']">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/careers">Carreras</RouterLink>
      <RouterLink to="/library">Biblioteca</RouterLink>
      <RouterLink to="/content">Contenido</RouterLink>
      <RouterLink to="/jobBank">Bolsa de trabajo</RouterLink>
      <RouterLink to="/contacts">Contactos</RouterLink>
    </nav>

    <div>
    <select v-model="$i18n.locale">
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="ay">Aymara</option>
    </select>
  </div>
    <div class="header-right">
      <RouterLink to="/login" class="button login-button">
        <i class='bx bxs-user-circle'></i>
        <span>Login</span>
      </RouterLink>
 
      <RouterLink to="/menu" class="button menu-button">
        <i class='bx bx-menu'></i>
        <span>Menú</span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
/* Estilo base del header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 700;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 15px 15px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-uac {
  height: 90px;
  margin-right: 20px;
}

.header-right {
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  color: rgb(29, 81, 141);
  font-size: 1rem;
  font-weight: bold;
  height: 100%;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: rgb(29, 81, 141);
  color: white;
}

.button i {
  font-size: 1.5rem;
  margin-right: 8px;
}

.menu-button, .login-button {
  margin-right: 10px;
}
.language-selector {
  position: relative;
  display: inline-block;
}

.header.hidden {
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}


.login-button, .menu-button {
  text-decoration: none;
  box-shadow: none;
}


</style>
