import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/material_bibliografico',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const useBookStore = defineStore
('book', {
    state: () => ({
        material_bibliografico: [],
        newBook: { type_matbib: '', title_matbib: '', author_matbib: '', description_matbib: '' },
        editingBook: null
    }),
    actions: {
        async fetchBooks() {
            try {
                const response = await apiClient.get('/');
                this.material_bibliografico = response.data;
                console.log(this.material_bibliografico);
            } catch (error) {
                console.error('Error fetching books:', error);
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
        async deleteBook(id) {
            try {
                console.log('Deleting book with ID:', id);
                await apiClient.delete('/' + id);
                console.log('Book deleted successfully.');
                await this.fetchBooks();
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        },
        async updateBook(updatedBook) {
            try {
              // Enviar la actualización al servidor
              await axios.put(`/api/books/${updatedBook.id_matbib}`, updatedBook);
              
              // Actualizar localmente la lista de libros para que refleje el cambio
              const index = this.material_bibliografico.findIndex(book => book.id_matbib === updatedBook.id_matbib);
              if (index !== -1) {
                this.material_bibliografico[index] = updatedBook;  // Actualiza el libro en el estado
              }
            } catch (error) {
              console.error("Error al actualizar el libro:", error);
            }
        },
        reserForm() {
            console.log('Resetting form.');
            this.newBook = { type_matbib: '', title_matbib: '', author_matbib: '', description_matbib: '' };
            this.editingBook = null;
        },
        cancelEdit() {
            console.log('Editing cancelled.');
            this.editingBook = null;
            this.reserForm();
        }
    }
});