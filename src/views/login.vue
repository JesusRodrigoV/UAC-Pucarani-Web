<template>
    <div class="fondo">
        <div class="container">

            <div class="izquierda"> Bienvenido </div>
            <div class="derecha">
                <h3>Iniciar Sesion</h3>
                <div class="formul">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-control">
                            <input type="email" v-model="email" required="" placeholder=" ">
                            <label>
                                <span style="transition-delay:0ms"><i class='bx bxs-user'></i></span>
                                <span style="transition-delay:20ms">E</span><span
                                    style="transition-delay:40ms">m</span><span
                                    style="transition-delay:80ms">a</span><span
                                    style="transition-delay:120ms">i</span><span style="transition-delay:200ms">l</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <div class="password-container">
                                <input :type="showPassword ? 'text' : 'password'" id="password" required=""
                                    v-model="password" placeholder="">
                                <label>
                                    <span style="transition-delay:0ms"><i class='bx bxs-lock-alt'></i></span>
                                    <span style="transition-delay:20ms">C</span><span
                                        style="transition-delay:40ms">o</span><span
                                        style="transition-delay:80ms">n</span><span
                                        style="transition-delay:120ms">t</span><span
                                        style="transition-delay:160ms">r</span><span
                                        style="transition-delay:200ms">a</span><span
                                        style="transition-delay:240ms">s</span><span
                                        style="transition-delay:280ms">e</span><span
                                        style="transition-delay:320ms">ñ</span><span
                                        style="transition-delay:360ms">a</span>
                                    <span></span>
                                </label>
                                <button class="boton" @click="togglePassword"> <i
                                        :class="{ 'ver': true, 'bx': true, 'bxs-show': showPassword, 'bx-show': !showPassword }"></i></button>
                            </div>


                        </div>
                        <div class="input-field">
                            <input type="submit" class="submit" value="Iniciar Sesión" />
                        </div>
                        <div class="enlace">
                            <RouterLink to="/" class="volver">Continuar como invitado</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
            <p v-if="authStore.error" class="error-message">{{ authStore.error }}</p>
        </div>
    </div>


</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/login/loginStore';
import { useRouter } from 'vue-router';
export default {
    data() {
        return {
            password: '',
            showPassword: false
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        }
    },
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        const email = ref('');
        const password = ref('');

        const handleLogin = async () => {
            await authStore.login(email.value, password.value);
            if (authStore.token) {
                console.log("Usuario autenticado con éxito");
                router.push('/');
            }
        };

        return {
            email,
            password,
            handleLogin,
            authStore
        };
    }
};


</script>

<style scoped>
.fondo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    /* background-color: aquamarine; */
    background-color: var(--azulito-celeste);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(10px);
}

.container {
    display: flex;
    width: 750px;
    background-color: blueviolet;
    border-radius: 25px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}

.izquierda,
.derecha {
    font-family: Source Sans Pro, Arial, sans-serif;
    height: 60vh;
    width: 50%;

}

.izquierda {
    display: flex;
    background-image: url("../assets/images/infra/principal.jpg");
    background-size: cover;
    background-position: center;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: lightblue;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    padding: 10px;
}

.derecha {
    padding: 50px 10px 10px 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: white;
}

.derecha h3 {
    text-align: center;
}

.formul {
    margin: 20px;
    padding: 25px 20px 20px 20px;
}

.form-control {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 20px 20px 20px 20px;
    width: 80%px;
}

.form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px var(--azul-principal) solid;
    display: block;
    width: 100%;
    padding: 15px 5px 15px 5px;
    font-size: 18px;
    color: var(--azul-principal);
    align-items: center;
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

/* .form-control input:focus+label span,
.form-control input:valid+label span {
    color: var(--azul-principal);
    transform: translateY(-30px);
} */

.form-control input:focus+label span,
.form-control input:valid+label span,
.form-control input:not(:placeholder-shown)+label span {
    color: var(--azul-principal);
    transform: translateY(-30px);
}


/* Botón de envío */
.submit {
    width: 80%;
    margin-top: 15px;
    padding: 15px;
    background: var(--azul-principal);
    color: #f2f2f2;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

}

.submit:hover {
    background: var(--amarillo);
    color: var(--azul-principal);

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
    border-radius: 10px;
    cursor: pointer;
}

.btn-secondary:hover {
    background-color: #5a6268;
}

.input-field {
    text-align: center;
}

.boton {
    flex-direction: row;
}

.ver {
    font-size: 35px;
    background: none;
    cursor: pointer;
    color: var(--azul-principal);
    margin-left: 10px;
}

i {
    color: var(--azul-principal);
}

.password-container {
    display: flex;
    align-items: center;
    width: 100%;
}

.password-container input {
    flex: 1;
}

.enlace {
    display: flex;
    justify-content: center;
    /* Centra horizontalmente */
    align-items: center;
    /* Centra verticalmente */
}

.volver {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: var(--azul-principal);
    transition: color 0.5s ease-in-out, text-decoration 0.5s ease-in-out;
    margin: 15px;
}

/* .volver:hover {
    text-decoration: underline;
    color: var(--azul-hover);
} */
.volver:hover {
    color: var(--azul-hover);
}

.volver::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--azul-hover);
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.volver:hover::after {
    width: 100%;
    left: 0;
}

@media (max-width: 768px) {
    .container {
        height: 75%;
        width: 90%;
        flex-direction: column;
    }

    .izquierda,
    .derecha {
        width: 100%;

    }

    .izquierda {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        height: 20%;
    }

    .derecha {
        height: 80%;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    .formul {
        font-size: 3vw;
    }

    .formul label,
    span {
        font-size: 1.5vw;
    }
}
</style>
