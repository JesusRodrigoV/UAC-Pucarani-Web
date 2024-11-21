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
        role: null,
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
                    this.token = response.data.msg; // Token de autenticación
                    this.role = response.data.role; // Rol del usuario
                    this.user = response.data.user; // Información del usuario
                    this.error = null;

                    console.log('Inicio de sesión exitoso:', {
                        token: this.token,
                        role: this.role,
                    });
                }
            } catch (error) {
                const errorMsg = error.response?.data?.error;
                if (errorMsg === 'User not found') {
                    this.error = 'Usuario inexistente';
                } else if (errorMsg === 'Invalid credentials') {
                    this.error = 'Contraseña incorrecta';
                } else {
                    this.error = 'Error de conexión';
                }
                console.error('Error durante el inicio de sesión:', this.error);
            }
        },

        logout() {
            this.token = null;
            this.user = null;
            this.role = null;
            this.error = null;
            console.log('Sesión cerrada.');
        },
    }
});
