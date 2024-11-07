import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/material_bibliografico',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getAllBooks() {
        return apiClient.get('/');
    },
    getBookById(id) {
        return apiClient.get('/' + id);
    },
    createBook(data) {
        return apiClient.post('/', data);
    },
    updateBook(id, data) {
        return apiClient.put('/' + id, data);
    },
    deleteBook(id) {
        return apiClient.delete('/' + id);
    },
}