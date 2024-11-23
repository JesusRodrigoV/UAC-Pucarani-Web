import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/news',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
    }
});

export default {
    getAllNews() {
        return apiClient.get('/');
    },
    getNewsById(id) {
        return apiClient.get('/' + id);
    },
    createNews(data) {
        return apiClient.post('/', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    updateNews(id, data) {
        return apiClient.put('/' + id, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    deleteNews(id) {
        return apiClient.delete('/' + id);
    },
}