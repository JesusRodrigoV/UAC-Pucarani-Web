<template>
    <header class="header">
      <div class="logo">
        <img src="assets/images/logoAzulUAC.png" alt="Logo UAC Pucarani">
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Biblioteca Digital</a></li>
          <li><a href="#">Carreras</a></li>
          <li><a href="#">Contenido</a></li>
          <li><a href="#">Contactos</a></li>
          <li><a href="#">Bolsa de Trabajo</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 2px solid #eaeaea;
  }
  
  .logo img {
    max-width: 100px;
  }
  
  .nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .nav a:hover {
    color: #007bff;
  }
  </style>
  