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
            newNews: { holder_news: '', image_news: '', date_news: '', summary_news: '' },
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
            async addNews(news) {
                try {
                    console.log('Adding news:', news);
                    const response = await apiClient.post('/', news); // Pasamos el objeto news con los datos del formulario
                    console.log('News added successfully:', response.data);
                    this.resetForm();
                    await this.fetchNews(); // Recargar las noticias después de agregar una
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
                    console.log('Update news:', this.newNews);

                    // Usar el ID del libro que estás editando
                    await apiClient.put('/' + this.editingNews.id_news, this.newNews);

                    console.log('News updated successfully.');
                    await this.fetchNews()
                    // Restablecer formulario y refrescar lista de libros
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