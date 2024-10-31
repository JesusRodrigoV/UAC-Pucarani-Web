<template>
    <div class="contenedor-form">
        <form class="form-login">
            <h1>Login</h1>
            <div class="imgLogin">
                <img src="@/assets/images/login.png" alt="">
            </div>
            <div>
                <input type="text" name="email" id="email" class="txtLogin" placeholder="Correo electrónico" required />
            </div>
            <div>
                <input type="password" name="password" id="password" class="txtLogin" placeholder="Contraseña"
                    required />
            </div>
            <button type="submit" class="btnLogin">Login</button>
        </form>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

html,
body {
    height: 100%;
    width: 100%;
}

.contenedor-form {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    height: 100vh;
    width: 100%;
}

.form-login {
    display: flex;
    width: 600px;
    height: 600px;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    gap: 30px;
}

.imgLogin img {
    display: block;
    width: 250px;
    height: auto;
}

.txtLogin {
    width: 400px;
    font-size: 20px;
    border: 1px solid #808080;
    padding: 10px;
    border-radius: 10px;
}

.btnLogin {
    width: 250px;
    font-size: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000000;
    cursor: pointer;
    transition: all 300ms;
}

.btnLogin:hover {
    background-color: #000000;
    color: #fff;
}

@media (max-width: 750px) {
  .form-login {
    width: 90%;
    height: auto;
    padding: 15px;
  }

  .txtLogin {
    width: 100%;
    font-size: 18px;
  }

  .btnLogin {
    width: 30%;
    font-size: 18px;
  }

  .imgLogin img {
    width: 150px;
  }
}


@media (max-width: 480px) {
  .form-login {
    padding: 10px;
    gap: 20px;
  }

  .txtLogin {
    font-size: 16px;
  }

  .btnLogin {
    font-size: 16px;
  }

  .imgLogin img {
    width: 120px;
  }
}

</style>