import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/opinions_home',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
});

export default {
    getAllOpinions() {
        return apiClient.get('/');
    },
    getOpinionById(id) {
        return apiClient.get('/' + id);
    },
    createOpinion(data) {
        return apiClient.post('/', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    updateOpinion(id, data) {
        return apiClient.put('/' + id, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    deleteOpinion(id) {
        return apiClient.delete('/' + id);
    },
};
