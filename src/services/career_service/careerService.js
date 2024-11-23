import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/careers',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
    }
});

export default {
    getAllCareers() {
        return apiClient.get('/');
    },
    getCareerById(id) {
        return apiClient.get('/' + id);
    },
    createCareer(data) {
        return apiClient.post('/', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    updateCareer(id, data) {
        return apiClient.put('/' + id, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    deleteCareer(id) {
        return apiClient.delete('/' + id);
    },
}