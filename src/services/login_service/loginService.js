import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/users',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    login(email_user, password_user) {
        return apiClient.post('/login', {
            email_user,
            password_user
        });
    }
};
