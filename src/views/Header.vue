<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="header-left">
      <img src="../assets/images/logoHorizontalAzulUAC.png" alt="Logo UAC" class="logo-uac" />
    </div>
    <nav class="nav-links">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/careers">Carreras</RouterLink>
      <RouterLink to="/library">Biblioteca</RouterLink>
      <RouterLink to="/content">Contenido</RouterLink>
      <RouterLink to="/contacts">Contactos</RouterLink>
      <RouterLink to="/jobBank">Bolsa de trabajo</RouterLink>
    </nav>
    <div class="header-right">
      <RouterLink to="/login">
        <img src="../assets/images/login.png" alt="Login" class="login-icon" />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
}

.header-right {
  display: flex;
  align-items: center;
}

.login-icon {
  height: 80px;
  cursor: pointer;
}

body {
  margin-top: 80px;
}
</style>
