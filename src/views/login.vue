<template>
    <div class="wrapper">
        <!-- Sección de Bienvenida e Iniciar Sesión -->
        <div class="container main">
            <div class="row">
                <!-- Lado de Bienvenida -->
                <div class="side-image">
                    <div class="text">
                        <h4 class="text-white">Bienvenido</h4>
                    </div>
                </div>

                <!-- Lado de Iniciar Sesión -->
                <div class="right">
                    <div class="input-box">
                        <header>Inicia Sesión</header>
                    </div>
                    <form @submit.prevent="handleSubmit">
                        <div class="form-control">
                            <input type="email" v-model="email" required="">
                            <label>
                                <span style="transition-delay:0ms">E</span><span
                                    style="transition-delay:40ms">m</span><span
                                    style="transition-delay:80ms">a</span><span
                                    style="transition-delay:120ms">i</span><span style="transition-delay:200ms">l</span>
                                 </label>
                        </div>
                        <div class="form-control">
                            <input type="password" v-model="password" required="">
                            <label>
                                <span style="transition-delay:0ms">C</span><span
                                    style="transition-delay:40ms">o</span><span
                                    style="transition-delay:80ms">n</span><span
                                    style="transition-delay:120ms">t</span><span
                                    style="transition-delay:160ms">r</span><span
                                    style="transition-delay:200ms">a</span><span
                                    style="transition-delay:240ms">s</span><span
                                    style="transition-delay:280ms">e</span><span
                                    style="transition-delay:320ms">ñ</span><span style="transition-delay:360ms">a</span>
                                 </label>
                        </div>
                        <div class="input-field">
                            <input type="submit" class="submit" value="Iniciar Sesión" />
                        </div>

                    </form>
                </div>

            </div>
        </div>

        <!-- Modal de error -->
        <div v-if="errorMessage" class="modal">
            <div class="modal-content">
                <div class="modal-body">
                    <h5>{{ errorMessage }}</h5>
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary" @click="closeModal">Cerrar</button>
                </div>
            </div>
        </div>

        <!-- Alerta -->
        <div v-if="alertMessage" class="alert-container">
            <div class="alert" :class="`alert-${alertType}`">
                {{ alertMessage }}
                <button @click="closeAlert"><i class='bx bx-x'></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errorMessage: "",
            alertMessage: "",
            alertType: "success",
        };
    },
    methods: {
        handleSubmit() {
            if (this.email !== "test@example.com" || this.password !== "password") {
                this.errorMessage = "Credenciales incorrectas. Por favor, verifica tus datos.";
            } else {
                this.alertMessage = "Inicio de sesión exitoso.";
                this.alertType = "success";
            }
        },
        closeModal() {
            this.errorMessage = "";
        },
        closeAlert() {
            this.alertMessage = "";
        },
    },
};
</script>

<style scoped>
/* General */
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f6fa;
  padding: 20px;
}

.container {
  /* display: flex;
  max-width: 900px;
  width: 100%;*/
  background: #ffffff; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  /* overflow: hidden; */
}

/* Lado de Bienvenida */
.side-image {
  flex: 1;
  /* background: url("src/assets/images/infra/principal.jpg") center/cover no-repeat; */
  background-color: var(--azul-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.side-image .text h4 {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

/* Lado de Iniciar Sesión */
.right {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-box {
  text-align: center;
}

.input-box header {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 190px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px var(--azul-principal) solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: var(--azul-principal);
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: var(--azul-principal);
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: var(--azul-principal);
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
  color: var(--azul-principal);
  transform: translateY(-30px);
}

/* Botón de envío */
.submit {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.submit:hover {
  background: #0056b3;
}

/* Modal de error */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #f8d7da;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

/* Responsividad */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .side-image {
    height: 200px;
  }
}
</style>