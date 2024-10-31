<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const { t, locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : locale.value === 'en' ? 'ay' : 'es';
};
</script>

<script>
export default {
  data() {
    return {
      dropdownVisible: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    }
  }
};
</script>

<template>
  <header class="header">
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
        <i class='bx bxs-user-circle login-icon'></i>
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
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-uac {
  height: 90px;
  margin-right: 20px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-links a:hover {
  color: #024a97;
  font-size: 17px;
}

.header-right {
  display: flex;
  align-items: center;
}

.login-icon {
  cursor: pointer;
  color: black;
  margin-right: 100px;
  font-size: 48px;
  width: 50px;
}

.menu-icon {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}
i{
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
</style>
