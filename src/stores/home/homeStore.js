import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/opinions_home',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
});

export const useOpinionStore = defineStore('opinion', {
    state: () => ({
        opinions_home: [],
        newOpinion: { image_person: null, name_person: '', description_opinion: '' },
        editingOpinion: null
    }),
    actions: {
        async fetchOpinions() {
            try {
                const response = await apiClient.get('/'); 
                this.opinions_home = response.data;
                console.log(this.opinions_home);
            } catch (error) {
                console.error('Error fetching opinions:', error);
            }
        },
        async addOpinion() {
            try {
                // Crear un objeto FormData para incluir la imagen y los datos
                const formData = new FormData();
                formData.append('image_person', this.newOpinion.image_person); // Archivo de imagen
                formData.append('name_person', this.newOpinion.name_person);
                formData.append('description_opinion', this.newOpinion.description_opinion);

                const response = await apiClient.post('/', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Opinion added successfully:', response.data);
                this.resetForm();
                await this.fetchOpinions();
            } catch (error) {
                console.error('Error adding opinion:', error.response);
            }
        },
        async deleteOpinion(id) {
            try {
                console.log('Deleting opinion with ID:', id);
                await apiClient.delete('/' + id);  
                console.log('Opinion deleted successfully.');
                await this.fetchOpinions();
            } catch (error) {
                console.error('Error deleting opinion:', error);
            }
        },
        async updateExistingOpinion() {
            try {
                // Crear un objeto FormData para actualizar con imagen y datos
                const formData = new FormData();
                formData.append('image_person', this.newOpinion.image_person); // Archivo de imagen
                formData.append('name_person', this.newOpinion.name_person);
                formData.append('description_opinion', this.newOpinion.description_opinion);

                await apiClient.put('/' + this.editingOpinion.id, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Opinion updated successfully.');
                this.resetForm();
                await this.fetchOpinions();
            } catch (error) {
                console.error('Error updating opinion:', error);
            }
        },
        resetForm() {
            console.log('Resetting form.');
            this.newOpinion = { image_person: null, name_person: '', description_opinion: '' };
            this.editingOpinion = null;
        },
        cancelEdit() {
            console.log('Editing cancelled.');
            this.editingOpinion = null;
            this.resetForm();
        }
    }
});
