<template>
  <div class="contenedor-form">
      <form class="form-login" @submit.prevent="handleLogin">
          <h1>Login</h1>
          <div class="imgLogin">
              <img src="@/assets/images/login.png" alt="">
          </div>
          <div>
              <input type="text" v-model="email" class="txtLogin" placeholder="Correo electrónico" />
          </div>
          <div>
              <input type="password" v-model="password" class="txtLogin" placeholder="Contraseña" />
          </div>
          <div>
              <input type="checkbox" v-model="isAdmin" id="adminMode" />
              <label for="adminMode">Modo Administrador</label>
          </div>
          <button type="submit" class="btnLogin">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
      return {
          email: '',
          password: '',
          isAdmin: false
      };
  },
  methods: {
      handleLogin() {
          if (this.isAdmin) {
              // Redirige a la página de administración si el modo admin está activo
              this.$router.push({ name: 'AdminPage' });
          } else {
              // Para manejar el login normal
              alert('Login normal');
          }
      }
  }
};
</script>

<style scoped>
* {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    width: 100%;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.contenedor-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.form-login {
    display: flex;
    width: 90%;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    gap: 20px;
    transform: scale(1);
    transition: transform 0.3s ease;
}

.form-login:hover {
    transform: scale(1.05);
}

h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 10px;
}

.imgLogin img {
    width: 150px;
    height: auto;
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.txtLogin {
    width: 100%;
    font-size: 1rem;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease;
}

.txtLogin:focus {
    border-color: #2575fc;
    box-shadow: 0 0 8px rgba(37, 117, 252, 0.3);
}

.btnLogin {
    width: 100%;
    max-width: 250px;
    font-size: 1rem;
    padding: 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #000000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(37, 117, 252, 0.4);
}

.btnLogin:hover {
    background-color: #0a2b97;
    box-shadow: 0 6px 14px rgba(3, 5, 114, 0.5);
}

input[type="checkbox"] {
    margin-right: 8px;
}

label {
    color: #555;
}

@media (max-width: 750px) {
    .form-login {
        width: 90%;
        padding: 20px;
    }

    .txtLogin, .btnLogin {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .txtLogin, .btnLogin {
        font-size: 0.85rem;
    }
}

</style>
