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
        async addBook() {
            try {
                console.log('Adding book:', this.newBook);
                const response = await apiClient.post('/', this.newBook);
                console.log('Book add successfully:', response.data);
                this.reserForm();
                await this.fetchBooks();
            } catch (error) {
                console.error('Error adding book:', error.response);
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
        async updateExistingBook() {
            try {
                console.log('Update book:', this.newBook);
                await apiClient.put('/' + this.editingBook, this.newBook);
                console.log('Book updated successfully.');
                this.reserForm();
                await this.fetchBooks();
            } catch (error) {
                console.error('Error updating book:', error);
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