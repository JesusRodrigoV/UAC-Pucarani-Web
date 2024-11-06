import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/opinions_home',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const useOpinionStore = defineStore
('opinion', {
    state: () => ({
        opinions_home: [],
        newOpinion: { image_person: '', name_person: '', description_opinion: '' },
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
                console.log('Adding opinion:', this.newOpinion);
                const response = await apiClient.post('/', this.newOpinion);  
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
                console.log('Update opinion:', this.newOpinion);
                await apiClient.put('/' + this.editingOpinion.id, this.newOpinion);  
                console.log('Opinion updated successfully.');
                this.resetForm();
                await this.fetchOpinions();
            } catch (error) {
                console.error('Error updating opinion:', error);
            }
        },
        resetForm() {
            console.log('Resetting form.');
            this.newOpinion = { image_person: '', name_person: '', description_opinion: '' };
            this.editingOpinion = null;
        },
        cancelEdit() {
            console.log('Editing cancelled.');
            this.editingOpinion = null;
            this.resetForm();
        }
    }
});
