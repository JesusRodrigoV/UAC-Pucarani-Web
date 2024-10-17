<script>
import 'boxicons';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="content_footer">
        <div class="profil">
          <div class="logo_area">
            <img src="@/assets/images/logoBlancoUAC.png" alt="Logo UAC">
            <span class="logo_name">UAC UCB</span>
          </div>
          <div class="desc_area">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus omnis eius dolorum eos blanditiis ipsam
              soluta unde velit a? At porro modi ea nesciunt officia sequi eos et molestiae quo.</p>
          </div>
          <div class="social_media">
            <a href="#"><i class='bx bxl-facebook-circle'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
          </div>
        </div>
        <div class="service_area">
          <ul class="service_header">
            <li class="service_name">Services</li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
          </ul>
          <ul class="service_header">
            <li class="service_name">Industries</li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
          </ul>
          <ul class="service_header">
            <li class="service_name">Company</li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
            <li><a href="">Algo</a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="footer_bottom">
        <div class="copy_right">
          <i class='bx bx-copyright'></i>
          <span>2024 UAC UCB | Desarrollado por Axl y sus Amigos</span>
        </div>
        <div class="tou">
          <a href="#">Term</a>
          <a href="#">Priv</a>
          <a href="#">Cook</a>
        </div>
      </div>
    </div>



    <!-- <div class="footer-info">
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
    </div> -->

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
  background-color: #036;
  box-shadow: 0 16px 70px -8px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
  transition: background 0.3s linear;
}

.container {
  max-width: 1240px;
  padding: 30px 40px;
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
  border: 1px solid #fff;
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

.social_media a {
  color: #828282;
  margin-right: 22px;
  font-size: 24px;
}

.social_media a:hover {
  color: #313131;
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
  color: #313131;
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
  color: #313131;
}

@media screen and (max-width: 768px){
  .content_footer {
    flex-wrap: wrap;
    justify-content: left;
  }

  .service_area {
    flex-wrap: wrap;
    justify-content: left;
  }

  .service_header {
    margin-left: 0;
    margin-right: 40px;
  }

  .social_media {
    margin-bottom: 1rem;
  }

  .footer_bottom {
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media screen and (max-width: 768px){
  .service_header {
    margin-bottom: 8px;
  }
  .copy_right{
    margin-bottom: 8px;
  }
}
  /*
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

.contact-info,
.policies,
.credits {
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
}*/</style>
