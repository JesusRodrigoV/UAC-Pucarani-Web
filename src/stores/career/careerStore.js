import { defineStore } from 'pinia';
import axios from 'axios';

// Usa el apiClient para todas las solicitudes
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/careers',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const useCareerStore = defineStore('career', {
    state: () => ({
        careers: [],
        graduationModalities: [],
        studyAreas: [],
        newCareer: { image_career: '', name_career: '', duration_career: '', description_career: '' },
        newGraduationModality: { id_career: '', type_gradmod: '' },
        newStudyArea: { id_career: '', name_stuar: '' },
        editingCareer: null,
        editingGraduationModality: null,
        editingStudyArea: null,
    }),
    actions: {
        // Obtener todas las carreras
        async fetchCareers() {
            try {
                const response = await apiClient.get('/');  // Usa apiClient con la baseURL configurada
                this.careers = response.data;
            } catch (error) {
                console.error('Error fetching careers:', error);
            }
        },

        // Obtener modalidades de graduación por carrera
        async fetchGraduationModalities(id_career) {
            try {
                const response = await apiClient.get(`/${id_career}/graduationModalities`);
                this.graduationModalities = response.data;
            } catch (error) {
                console.error('Error fetching graduation modalities:', error);
            }
        },

        // Obtener áreas de estudio por carrera
        async fetchStudyAreas(id_career) {
            try {
                const response = await apiClient.get(`/${id_career}/studyAreas`);
                this.studyAreas = response.data;
            } catch (error) {
                console.error('Error fetching study areas:', error);
            }
        },

        // Agregar una carrera
        async addCareer() {
            try {
                const response = await apiClient.post('/', this.newCareer);  // Usa apiClient
                console.log('Career added successfully:', response.data);
                this.resetCareerForm();
                await this.fetchCareers();
            } catch (error) {
                console.error('Error adding career:', error);
            }
        },

        // Agregar modalidad de graduación
        async addGraduationModality() {
            try {
                const response = await apiClient.post('/graduationModalities', this.newGraduationModality);  // Usa apiClient
                console.log('Graduation modality added successfully:', response.data);
                this.resetGraduationModalityForm();
                await this.fetchGraduationModalities(this.newGraduationModality.id_career);
            } catch (error) {
                console.error('Error adding graduation modality:', error);
            }
        },

        // Agregar área de estudio
        async addStudyArea() {
            try {
                const response = await apiClient.post('/studyAreas', this.newStudyArea);  // Usa apiClient
                console.log('Study area added successfully:', response.data);
                this.resetStudyAreaForm();
                await this.fetchStudyAreas(this.newStudyArea.id_career);
            } catch (error) {
                console.error('Error adding study area:', error);
            }
        },

        // Eliminar una carrera
        async deleteCareer(id) {
            try {
                await apiClient.delete(`/${id}`);  // Usa apiClient
                console.log('Career deleted successfully.');
                await this.fetchCareers();
            } catch (error) {
                console.error('Error deleting career:', error);
            }
        },

        // Eliminar modalidad de graduación
        async deleteGraduationModality(id) {
            try {
                await apiClient.delete(`/graduationModalities/${id}`);  // Usa apiClient
                console.log('Graduation modality deleted successfully.');
                await this.fetchGraduationModalities(this.newGraduationModality.id_career);
            } catch (error) {
                console.error('Error deleting graduation modality:', error);
            }
        },

        // Eliminar área de estudio
        async deleteStudyArea(id) {
            try {
                await apiClient.delete(`/studyAreas/${id}`);  // Usa apiClient
                console.log('Study area deleted successfully.');
                await this.fetchStudyAreas(this.newStudyArea.id_career);
            } catch (error) {
                console.error('Error deleting study area:', error);
            }
        },

        // Actualizar carrera
        async updateCareer() {
            try {
                await apiClient.put(`/${this.editingCareer.id}`, this.newCareer);  // Usa apiClient
                console.log('Career updated successfully.');
                this.resetCareerForm();
                await this.fetchCareers();
            } catch (error) {
                console.error('Error updating career:', error);
            }
        },

        // Actualizar modalidad de graduación
        async updateGraduationModality() {
            try {
                await apiClient.put(`/graduationModalities/${this.editingGraduationModality.id}`, this.newGraduationModality);  // Usa apiClient
                console.log('Graduation modality updated successfully.');
                this.resetGraduationModalityForm();
                await this.fetchGraduationModalities(this.newGraduationModality.id_career);
            } catch (error) {
                console.error('Error updating graduation modality:', error);
            }
        },

        // Actualizar área de estudio
        async updateStudyArea() {
            try {
                await apiClient.put(`/studyAreas/${this.editingStudyArea.id}`, this.newStudyArea);  // Usa apiClient
                console.log('Study area updated successfully.');
                this.resetStudyAreaForm();
                await this.fetchStudyAreas(this.newStudyArea.id_career);
            } catch (error) {
                console.error('Error updating study area:', error);
            }
        },

        // Resetear formularios
        resetCareerForm() {
            this.newCareer = { image_career: '', name_career: '', duration_career: '', description_career: '' };
            this.editingCareer = null;
        },

        resetGraduationModalityForm() {
            this.newGraduationModality = { id_career: '', type_gradmod: '' };
            this.editingGraduationModality = null;
        },

        resetStudyAreaForm() {
            this.newStudyArea = { id_career: '', name_stuar: '' };
            this.editingStudyArea = null;
        },
    }
});
