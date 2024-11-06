import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/careers', // Asegúrate de que la URL base esté bien configurada
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    // Servicio para obtener todas las carreras
    getAllCareers() {
        return apiClient.get('/careers');
    },

    // Servicio para obtener modalidades de graduación por carrera
    getGraduationModalities(id_career) {
        return apiClient.get(`/graduation_modalities/${id_career}`);
    },

    // Servicio para obtener áreas de estudio por carrera
    getStudyAreas(id_career) {
        return apiClient.get(`/study_areas/${id_career}`);
    },

    // Crear una carrera
    createCareer(data) {
        return apiClient.post('/careers', data);
    },

    // Crear una modalidad de graduación
    createGraduationModality(data) {
        return apiClient.post('/graduation_modalities', data);
    },

    // Crear un área de estudio
    createStudyArea(data) {
        return apiClient.post('/study_areas', data);
    },

    // Actualizar una carrera
    updateCareer(id, data) {
        return apiClient.put(`/careers/${id}`, data);
    },

    // Actualizar modalidad de graduación
    updateGraduationModality(id, data) {
        return apiClient.put(`/graduation_modalities/${id}`, data);
    },

    // Actualizar área de estudio
    updateStudyArea(id, data) {
        return apiClient.put(`/study_areas/${id}`, data);
    },

    // Eliminar una carrera
    deleteCareer(id) {
        return apiClient.delete(`/careers/${id}`);
    },

    // Eliminar modalidad de graduación
    deleteGraduationModality(id) {
        return apiClient.delete(`/graduation_modalities/${id}`);
    },

    // Eliminar área de estudio
    deleteStudyArea(id) {
        return apiClient.delete(`/study_areas/${id}`);
    },
};
