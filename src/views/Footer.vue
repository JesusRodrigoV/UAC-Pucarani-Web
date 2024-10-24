<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="content_footer">
        <div class="profil">
          <div class="logo_area">
            <img src="@/assets/images/logoBlancoUAC.png" alt="Logo UAC">
            <span class="logo_name"></span>
          </div>
          <div class="desc_area">
            <p>Teléfono: +591 78782060</p>
            <p>Email: contacto@uacpucarani.edu.bo</p>
            <p>Dirección: Av. Avaroa s/n, Pucarani, Provincia Los Andes, Bolivia.</p>
          </div>
          <div class="social_media">
            <a href="https://www.youtube.com/@uacucb_catolica" target='_blank'><i class='bx bxl-youtube'></i></a>
            <a href="https://x.com/CatolicaUacs" target='_blank'>
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 24 24">
                <path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@enfe_fisioucb?is_from_webapp=1&sender_device=pc" target='_blank'><i class='bx bxl-tiktok'></i></a>
            <a href="#" target='_blank'><i class='bx bxl-whatsapp'></i></a>
          </div>
        </div>
        <div class="service_area">
          <ul class="service_header">
            <li class="service_name">Carreras</li>
            <li><RouterLink to="/enfe">Enfermería</RouterLink></li>
            <li><RouterLink to="/fisio">Fisioterapia<br>Kinesiología</RouterLink></li>
          </ul>
          <ul class="service_header">
            <li class="service_name">Industrias</li>
            <li><a href="#">Johnson & Johnson, Bayer, y Roche</a></li>
          </ul>
          <ul class="service_header">
            <li class="service_name">Compañía</li>
            <li><a href="#">Ucbito</a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="footer_bottom">
        <div class="copy_right">
          <i class='bx bx-copyright'></i>
          <span>2024 UAC Pucarani | Desarrollado por Axl y sus amigos</span>
        </div>
        <div class="tou">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

footer {
  width: 100%;
  background-color: #036;
  box-shadow: 0 16px 70px -8px rgba(0, 0, 0, 0.25);
  border-radius: 15px 15px 0 0;
}

.container {
  max-width: 1285px;
  padding: 30px;
  margin: auto;
}

.content_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.profil {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo_area {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.logo_area img {
  width: 120px;
  border-radius: 50%;
}

.desc_area p {
  color: #828282;
  line-height: 28px;
  text-align: center;
}

.social_media a {
  color: #828282;
  margin-right: 20px;
  font-size: 24px;
}

.social_media a:hover,
.social-icon:hover {
  color: #fff;
}

.social-icon {
  width: 20px;
  fill: #828282;
  transition: fill 0.3s;
}

.service_area {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.service_header {
  margin-bottom: 20px;
}

.service_name {
  color: #fff;
  font-weight: 600;
  margin-bottom: 8px;
}

.service_header li a {
  color: #828282;
}

.service_header li a:hover {
  color: #fff;
}

hr {
  border: none;
  height: 1px;
  background-color: #828282;
  margin: 1rem 0;
}

.footer_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  flex-wrap: wrap;
}

.copy_right,
.tou a {
  color: #828282;
}

.tou a:hover {
  color: #fff;
}

@media screen and (max-width: 768px) {
  .service_area {
    flex-direction: column;
    align-items: center;
  }

  .content_footer {
    flex-direction: column;
    align-items: center;
  }

  .footer_bottom {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 480px) {
  .logo_area img {
    width: 100px;
  }

  .desc_area p {
    font-size: 14px;
  }

  .social_media a {
    margin-right: 15px;
  }
}
</style>
