import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/users', 
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
        error: null,
    }),

    actions: {
        async login(email_user, password_user) {
            try {
                const response = await apiClient.post('/login', {
                    email_user,
                    password_user
                });
                
                if (response.data.ok) {
                    this.token = response.data.msg; // Almacena el token
                    this.error = null;
                    console.log('Login successful:', this.token);
                }
            } catch (error) {
                if (error.response?.data?.error === 'User not found') {
                    this.error = 'Usuario inexistente';
                } else if (error.response?.data?.error === 'Invalid credentials') {
                    this.error = 'Error en contraseña';
                } else {
                    this.error = 'Error de conexión';
                }
                console.error('Error during login:', this.error);
            }
        },

        logout() {
            this.token = null;
            this.user = null;
            this.error = null;
            console.log('User logged out.');
        },
    }
});