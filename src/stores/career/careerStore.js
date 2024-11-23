import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/careers',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
});

export const useCareerStore = defineStore('career', {
    state: () => ({
        careers: [],
        newCareer: { name_career: '', image_career: null, description_career: '', duration_career: '', study_area: '', graduation_modality: '' },
        editingCareer: null
    }),
    actions: {
        async fetchCareers() {
            try {
                const response = await apiClient.get('/');
                this.careers = response.data;
                console.log(this.careers);
            } catch (error) {
                console.error('Error fetching careers:', error);
            }
        },
        async addCareer() {
            try {
                // Crear un objeto FormData para incluir la imagen y los datos
                const formData = new FormData();
                formData.append('name_career', this.newCareer.name_career)
                formData.append('image_career', this.newCareer.image_career); // Archivo de imagen
                formData.append('description_career', this.newCareer.description_career);
                formData.append('duration_career', this.newCareer.duration_career);
                formData.append('study_area', this.newCareer.study_area);
                formData.append('graduation_modality', this.newCareer.graduation_modality);

                const response = await apiClient.post('/', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Career added successfully:', response.data);
                this.resetForm();
                await this.fetchCareers();
            } catch (error) {
                console.error('Error adding career:', error.response);
            }
        },
        async deleteCareer(id) {
            try {
                console.log('Deleting career with ID:', id);
                await apiClient.delete('/' + id);
                console.log('Career deleted successfully.');
                await this.fetchCareers();
            } catch (error) {
                console.error('Error deleting career:', error);
            }
        },
        async updateExistingCareer() {
            try {
                // Crear un objeto FormData para actualizar con imagen y datos
                const formData = new FormData();
                formData.append('name_career', this.newCareer.name_career)
                formData.append('image_career', this.newCareer.image_career); // Archivo de imagen
                formData.append('description_career', this.newCareer.description_career);
                formData.append('duration_career', this.newCareer.duration_career);
                formData.append('study_area', this.newCareer.study_area);
                formData.append('graduation_modality', this.newCareer.graduation_modality);

                await apiClient.put('/' + this.editingCareer.id, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Career updated successfully.');
                this.resetForm();
                await this.fetchCareers();
            } catch (error) {
                console.error('Error updating career:', error);
            }
        },
        resetForm() {
            console.log('Resetting form.');
            this.newCareer = { name_career: '', image_career: null, description_career: '', duration_career: '', study_area: '', graduation_modality: '' };
            this.editingCareer = null;
        },
        cancelEdit() {
            console.log('Editing cancelled.');
            this.editingCareer = null;
            this.resetForm();
        }
    }
});