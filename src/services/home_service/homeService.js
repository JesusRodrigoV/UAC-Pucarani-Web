import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/opinions_home',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
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
        return apiClient.post('/', data);
    },
    updateOpinion(id, data) {
        return apiClient.put('/' + id, data);
    },
    deleteOpinion(id) {
        return apiClient.delete('/' + id);
    },
}