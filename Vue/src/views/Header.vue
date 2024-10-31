<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const headerTransparent = ref(true);
const headerHidden = ref(false);

let lastScroll = 0;
const handleScroll = () => {
  const currentScroll = window.scrollY;
  headerTransparent.value = currentScroll === 0;
  headerHidden.value = currentScroll > lastScroll && currentScroll > 100;
  lastScroll = currentScroll;
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<template>




    <header :class="['header', { 'transparent': headerTransparent, 'hidden': headerHidden }]">
    <div class="header-left">
      <RouterLink to="/">
        <img src="../assets/images/logoHorizontalAzulUAC.png" alt="Logo UAC" class="logo-uac" />
      </RouterLink>
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
  background-color: white;
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


/* estil*/
.header.transparent {
  background-color: transparent;
  box-shadow: none;
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