<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-info">
      <div class="contact-info">
        <h3>Información de Contacto</h3>
        <p>Teléfono: +591-78782060</p>
        <p>Email: contacto@uacpucarani.edu.bo</p>
        <p>Dirección: Av. Principal, Pucarani, Bolivia</p>
      </div>
      <div class="policies">
        <h3>Políticas</h3>
        <ul>
          <li><a href="#">Política de Privacidad</a></li>
          <li><a href="#">Términos de Servicio</a></li>
          <li><a href="#">Política de Cookies</a></li>
        </ul>
      </div>
      <div class="credits">
        <h3>Créditos</h3>
        <p>© 2024 UAC Pucarani. Todos los derechos reservados.</p>
        <p>Diseñado por el equipo de desarrollo UAC.</p>
      </div>
    </div>
    <div class="social-icons">
      <a href="https://facebook.com" target="_blank" aria-label="Facebook">
        <img src="../assets/images/facebook.png" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" aria-label="Instagram">
        <img src="../assets/images/instagram.png" alt="Instagram" />
      </a>
      <a href="https://whatsapp.com" target="_blank" aria-label="WhatsApp">
        <img src="../assets/images/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
    
  </footer>
</template>

<style scoped>
/* 
Pagina Web:
https://uacucb.edu.bo/puca.php
X:
https://x.com/CatolicaUacs
Facebook:

YouTube:
https://youtube.com/@uacucb_catolica?si=WoriJ9hPPNR3La6Y
 */
.footer {
  background-color: #036;
  padding: 20px 0;
  text-align: center;
  border-top: 2px solid #e9ecef;
  margin-top: auto;
  position: relative;
  bottom: 0;
  width: 100%;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 20px;
}

.social-icons img {
  width: 30px;
  height: 30px;
}

.footer-info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.contact-info, .policies, .credits {
  flex: 1;
  margin: 20px;
}

h3 {
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

p {
  color: #fff;

}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

ul li a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

ul li a:hover {
  color: #024a97;
}
</style>
