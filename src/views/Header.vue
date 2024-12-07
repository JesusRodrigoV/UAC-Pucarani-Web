<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/login/loginStore';
import { useI18n } from 'vue-i18n';

const authStore = useAuthStore();
const { t } = useI18n();
const router = useRouter();

const headerTransparent = ref(true);
const headerHidden = ref(false);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

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

const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<template>
  <header :class="['header', { 'transparent': headerTransparent, 'hidden': headerHidden }]">
    <div class="header-left">
      <RouterLink to="/">
        <img v-if="headerTransparent" src="../assets/images/logoHorizontalBlancoUAC.png" alt="Logo UAC"
          class="logo-uac-trans" />
        <img v-if="!headerTransparent" src="../assets/images/logoHorizontalAzulUAC.png" alt="Logo UAC"
          class="logo-uac" />
      </RouterLink>
    </div>

    <!-- Enlaces de navegación -->
    <nav :class="['nav-links', menuOpen ? 'show' : '']">
      <RouterLink to="/" class="enlace">{{ t('titles.home') }}</RouterLink>
      <RouterLink to="/Carrera" class="enlace">{{ t('Carrera') }}</RouterLink>
      <RouterLink to="/library" class="enlace">{{ t('titles.library') }}</RouterLink>
      <RouterLink to="/content" class="enlace">{{ t('titles.content') }}</RouterLink>
      <RouterLink to="/jobBank" class="enlace">{{ t('titles.jobBank') }}</RouterLink>
      <RouterLink to="/pastoral" class="enlace">{{ t('titles.pastoral') }}</RouterLink>
      <RouterLink to="/contacts" class="enlace">{{ t('titles.contacts') }}</RouterLink>
      <RouterLink v-if="authStore.role === 'admin'" to="/admin" class="enlace">{{ t('titles.admin') }}</RouterLink>
    </nav>

    <div class="header-right">
      <i v-if="authStore.token" class="bx bxs-exit login-icon" @click="logout"></i>
      <RouterLink v-else to="/login">
        <i :class="['bx', 'bxs-user-circle', 'login-icon', { 'no-shadow': headerTransparent }]"></i>
      </RouterLink>
    </div>
    <div class="menu-icon" @click="toggleMenu">
      <i class='bx bx-menu'></i>
    </div>
  </header>
</template>

<style scoped>
.enlace {
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: var(--azul-principal);
  transition: color 0.5s ease-in-out, text-decoration 0.5s ease-in-out;
  margin: 2px;
}

.enlace:hover {
  color: var(--azul-hover);
}

.enlace::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--azul-hover);
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.enlace:hover::after {
    width: 100%;
    left: 0;
}
.header {
  align-items: center;
  text-align: center;
  position: fixed;
  top: 10px;
  width: 98%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  z-index: 700;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 15px 15px 15px 15px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-left: auto;
  left: 50%;
  transform: translateX(-50%);
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-uac {
  height: 80px;
  margin-right: 20px;
  /* filter: drop-shadow(
    0 0 10px rgba(0, 85, 165, 0.4)
  ); */
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.9));
}

.logo-uac-trans{
  height: 80px;
  margin-right: 20px;
  /* filter: drop-shadow(
    0 0 10px rgba(0, 85, 165, 0.4)
  ); */
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.9));
}



.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
transition: font-size 0.4s ease, color 0.4s ease-in-out;
}

.nav-links a:hover {
  color: #024a97;
  font-size: 15px;
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

.menu-button,
.login-button {
  margin-right: 10px;
}
.enlace.router-link-active::after {
  color: var(--azul-principal);
  width: 100%;
  left: 0;
  background-color: var(--azul-hover); /* color del subrayado */
}


/* estil*/
.header.transparent {
  background-color: transparent;
  box-shadow: none;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9), -1px -1px 3px rgba(0, 0, 0, 0.8);
}

.header.transparent.nav-links:hover {
  color: var(--azul-principal);
}

.header.hidden {
  transform: translateY(-700px);
  transition: transform 0.5s ease-in-out;
}

.light-text {
  color: white;
}

.light-icon {
  color: white;
}

.header.transparent .nav-links a {
  color: white;
}

.header.transparent .menu-icon {
  color: white;
}

.login-button,
.menu-button {
  text-decoration: none;
  box-shadow: none;
}

.login-button {
  height: 80px;
  margin-right: 20px;

}

.login-button.no-shadow {
  filter: none;
}

.login-icon.no-shadow {
  filter: none;
}

.login-icon {
  cursor: pointer;
  color: var(--azul-principal);
  margin-right: 100px;
  font-size: 48px;
  width: 50px;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
}

.login-icon:hover {
  color: var(--amarillo);
}

.menu-icon {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

i {
  transition: color 0.3s;
}

i:hover {
  color: #024a97;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: white;
    flex-direction: column;
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 700;
  }

  .nav-links.show {
    display: flex;
  }

  .nav-links a {
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
  }

  .header-right {
    margin-right: 20px;
  }

  .menu-icon {
    display: block;
  }

  .logo-uac {
    height: 60px;
  }
}

body {
  margin-top: 80px;
}

.language-selector {
  position: relative;
  display: inline-block;
}

.language-icon {
  font-size: 24px;
  cursor: pointer;
}

.language-dropdown {
  position: absolute;
  top: 30px;
  left: 0;
  padding: 5px;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: white;
    flex-direction: column;
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 700;
  }

  .nav-links.show {
    display: flex;
  }

  .nav-links a {
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
  }

  .header-right {
    margin-right: 20px;
  }

  .menu-icon {
    display: block;
  }

  .logo-uac {
    height: 60px;
  }
}
</style>
