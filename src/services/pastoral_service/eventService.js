import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/events',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
});

export default {
    getAllEvents() {
        return apiClient.get('/');
    },
    getEventById(id) {
        return apiClient.get('/' + id);
    },
    createEvent(data) {
        return apiClient.post('/', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    updateEvent(id, data) {
        return apiClient.put('/' + id, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    deleteEvent(id) {
        return apiClient.delete('/' + id);
    },
};
