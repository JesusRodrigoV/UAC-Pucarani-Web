<script setup>
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
const { t, locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : locale.value === 'en' ? 'ay' : 'es';
};
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
            <p>{{ t('footer.phone') }}: +591 78782060</p>
            <p>Email: contacto@uacpucarani.edu.bo</p>
            <p>{{ t('footer.address') }}</p>
          </div>
          <div class="social_media">
            <a href="https://www.youtube.com/@uacucb_catolica" target='_blank'><i class='bx bxl-youtube'></i></a>
            <a href="https://x.com/CatolicaUacs" target='_blank'>
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1"
                viewBox="0 0 24 24">
                <path
                  d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@enfe_fisioucb?is_from_webapp=1&sender_device=pc" target='_blank'><i
                class='bx bxl-tiktok'></i></a>
            <a href="#" target='_blank'><i class='bx bxl-whatsapp'></i></a>
          </div>
        </div>
        <div class="service_area">
          <ul class="service_header">
            <li class="service_name">{{ t('careers.title') }}</li>
            <li>
              <RouterLink to="/enfe">{{ t('careers.enfermeria') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/fisio">{{ t('careers.fisioterapia') }}</RouterLink>
            </li>
          </ul>
          <ul class="service_header">
            <li class="service_name">Cuenta</li>
            <li>
              <RouterLink to="/login">Iniciar Sesion</RouterLink>
            </li>
          </ul>
          <!-- <ul class="service_header">
            <li class="service_name">{{ t('company.title') }}</li>
            <li><a href="#">Ucbito</a></li>
          </ul> -->
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
        <div class="language-select">
          <div>
            <select v-model="$i18n.locale">
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="ay">Aymara</option>
            </select>
            <transition name="fade">
              <div v-if="currentLanguage" class="content">
                <p>{{ content }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

body {
  background-color: #036;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

main {
  width: 100%;
}

footer {
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
  /* background-color: #036; */
  background: linear-gradient(180deg, var(--azul-hover), var(--azul-principal));
  box-shadow: 0 16px 70px -8px rgba(0, 0, 0, 0.25);
  border-radius: 15px 15px 0 0;
  transition: background 0.3s linear;
}

.container {
  max-width: 1285px;
  padding: 30px 30px;
  margin: auto;
}

.content_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.profil .logo_area {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.profil .logo_area img {
  border-radius: 50%;
  /* border: 1px solid #fff; */
  width: 150px;
}

.logo_area .logo_name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 1rem;
  color: #fff;
}

.desc_area {
  max-width: 320px;
  margin-bottom: 1.25rem;
}

.desc_area p {
  color: #828282;
  font-weight: 400;
  line-height: 28px;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.social_media a {
  color: #828282;
  margin-right: 22px;
  font-size: 24px;
  transition: color 0.3s ease-in-out, fill 0.3s ease-in-out;
}

.social-icon {
  fill: #828282;
}

.social-icon,
.bx {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.social-icon:hover {
  fill: #fff;
}

.social_media a:hover {
  color: #fff;
}

.service_area {
  display: flex;
}

.service_header {
  margin-right: 40px;
}

li.service_name {
  color: #fff;
  font-weight: 600;
}

.service_header li a {
  color: #828282;
  padding-bottom: 1px;
  font-weight: 400;
}

.service_header li a:hover {
  color: #fff;
}

.service_header li {
  margin-bottom: 10px;
}

hr {
  height: 1px;
  border: none;
  background-color: #828282;
  margin-bottom: 1rem;
}

.footer_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .875rem;
}

.copy_right {
  color: #828282;
  display: flex;
  align-items: center;
}

.copy_right span {
  margin-left: 8px;
  font-weight: 400;
  letter-spacing: 0.135rem;
}

.tou a {
  color: #828282;
  margin-left: 1.5rem;
}

.tou a:hover {
  color: #fff;
}

/** */
.footer-icon {
  width: 50px;
  height: 50px;
  filter: brightness(0) saturate(100%) invert(62%) sepia(5%) saturate(0%) hue-rotate(177deg) brightness(88%) contrast(86%);
  transition: filter 0.3s ease;
}

.footer-icon:hover {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);
}

.language-select select {
  background-color: #036;
  color: #828282;
  border: 1px solid #828282;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.875rem;
  margin-left: 1rem;
}

.language-select select:hover {
  color: #fff;
  border-color: #fff;
}


@media screen and (max-width: 768px) {
  .content_footer {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .service_area {
    flex-wrap: wrap;
    justify-content: center;
  }

  .service_header {
    margin-left: 0;
    margin-right: 40px;
  }

  .desc_area {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }




  .social_media {
    display: inline-block;
    margin-bottom: 1rem;
    text-align: center;
  }

  .profil {
    width: 100%;

  }

  .logo_area {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* margin-bottom: 1rem; */
  }

  .footer_bottom {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .service_header {
    margin-bottom: 8px;
  }

  .copy_right {
    margin-bottom: 8px;
  }
}
</style>