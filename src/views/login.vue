<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
        <input v-model="email" type="email" placeholder="Email" class="login-input" />
        <input v-model="password" type="password" placeholder="Password" class="login-input" />
        <button @click="handleLogin" class="login-button">Login</button>
        <p v-if="authStore.error" class="error-message">{{ authStore.error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/login/loginStore';
  import { useRouter } from 'vue-router';
  
  export default {
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
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f4f6;
  }
  
  .login-box {
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333333;
  }
  
  .login-input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .login-input:focus {
    border-color: #4a90e2;
  }
  
  .login-button {
    width: 100%;
    padding: 12px;
    margin-top: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    background-color: #4a90e2;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .login-button:hover {
    background-color: #357ab7;
  }
  
  .error-message {
    margin-top: 10px;
    color: #d9534f;
    font-size: 14px;
  }
  </style>