import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/news',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const useNewsStore = defineStore
    ('newss', {
        state: () => ({
            news: [],
            newNews: { holder_news: '', image_news: null, date_news: '', summary_news: '' },
            editingNews: null
        }),
        actions: {
            async fetchNews() {
                try {
                    const response = await apiClient.get('/');
                    this.news = response.data;
                    console.log(this.news);
                } catch (error) {
                    console.error('Error fetching news:', error);
                }
            },
            async addNews() {
                try {
                    // Crear un objeto FormData para incluir la imagen y los datos
                    const formData = new FormData();
                    formData.append('holder_news', this.newNews.holder_news)
                    formData.append('image_news', this.newNews.image_news); // Archivo de imagen
                    formData.append('date_news', this.newNews.date_news);
                    formData.append('summary_news', this.newNews.summary_news);
    
                    const response = await apiClient.post('/', formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                    console.log('News added successfully:', response.data);
                    this.resetForm();
                    await this.fetchNews();
                } catch (error) {
                    console.error('Error adding news:', error.response);
                }
            },
            async deleteNews(id) {
                try {
                    console.log('Deleting news with ID:', id);
                    await apiClient.delete('/' + id);
                    console.log('News deleted successfully.');
                    await this.fetchNews();
                } catch (error) {
                    console.error('Error deleting news:', error);
                }
            },
            async updateExistingNews() {
                try {
                    // Crear un objeto FormData para actualizar con imagen y datos
                    const formData = new FormData();
                    formData.append('holder_news', this.newNews.holder_news)
                    formData.append('image_news', this.newNews.image_news); // Archivo de imagen
                    formData.append('date_news', this.newNews.date_news);
                    formData.append('summary_news', this.newNews.summary_news);
    
                    await apiClient.put('/' + this.editingNews.id, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                    console.log('News updated successfully.');
                    this.resetForm();
                    await this.fetchNews();
                } catch (error) {
                    console.error('Error updating news:', error);
                }
            },
            resetForm() {
                console.log('Resetting form.');
                this.newNews = { holder_news: '', image_news: '', date_news: '', summary_news: '' };
                this.editingNews = null;
            },
            cancelEdit() {
                console.log('Editing cancelled.');
                this.editingNews = null;
                this.resetForm();
            }
        }
    });