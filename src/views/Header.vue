<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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

</script>

<template>
  <header :class="['header', { 'transparent': headerTransparent, 'hidden': headerHidden }]">
    <div class="header-left">
      <RouterLink to="/">
        <img src="../assets/images/logoHorizontalAzulUAC.png" alt="Logo UAC" class="logo-uac" />
      </RouterLink>
    </div>

    <!-- Enlaces de navegación -->
    <nav :class="['nav-links', menuOpen ? 'show' : '']">
      <RouterLink to="/">{{ t('titles.home') }}</RouterLink>
      <RouterLink to="/careers">{{ t('titles.careers') }}</RouterLink>
      <RouterLink to="/library">{{ t('titles.library') }}</RouterLink>
      <RouterLink to="/content">{{ t('titles.content') }}</RouterLink>
      <RouterLink to="/jobBank">{{ t('titles.jobBank') }}</RouterLink>
      <RouterLink to="/pastoral">{{ t('titles.pastoral') }}</RouterLink>
      <RouterLink to="/contacts">{{ t('titles.contacts') }}</RouterLink>
    </nav>

    <div class="header-right">
      <RouterLink to="/login">
        <i :class="['bx', 'bxs-user-circle','login-icon', { 'no-shadow': headerTransparent }]"></i>
      </RouterLink>
    </div>
    <div class="menu-icon" @click="toggleMenu">
      <i class='bx bx-menu'></i>
    </div>
  </header>
</template>

<style scoped>
/* Estilo base del header */
.header {
  align-items: center;
  position: fixed;
  top: 10px;
  width: 98%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  z-index: 700;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  transition: background-color 0.3s ease, transform 0.3s ease;
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
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.9));
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
  font-size: 1rem;
}

.header-right {
  display: flex;
  align-items: center;
}

.menu-icon {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.header.transparent {
  background-color: transparent;
  box-shadow: none;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}

.header.hidden {
  transform: translateY(-700px);
  transition: transform 0.5s ease-in-out;
}

/* Estilos para dispositivos móviles */
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
