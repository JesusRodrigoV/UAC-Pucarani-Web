import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/events',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
});

export const useEventStore = defineStore('event', {
    state: () => ({
        events: [],
        newEvent: { title_event: '', date_start: '', date_end: '', description_event: '' },
        editingEvent: null
    }),
    actions: {
        async fetchEvents() {
            try {
                const response = await apiClient.get('/'); 
                this.events = response.data;
                console.log(this.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        },
        async addEvent() {
            try {
                const formData = new FormData();
                formData.append('title_event', this.newEvent.title_event);
                formData.append('date_start', this.newEvent.date_start);
                formData.append('date_end', this.newEvent.date_end);
                formData.append('description_event', this.newEvent.description_event);

                const response = await apiClient.post('/', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Event added successfully:', response.data);
                this.resetForm();
                await this.fetchEvents();
            } catch (error) {
                console.error('Error adding event:', error.response);
            }
        },
        async deleteEvent(id) {
            try {
                console.log('Deleting event with ID:', id);
                await apiClient.delete('/' + id);  
                console.log('Event deleted successfully.');
                await this.fetchEvents();
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        },
        async updateExistingEvent() {
            try {
                const formData = new FormData();
                formData.append('title_event', this.newEvent.title_event);
                formData.append('date_start', this.newEvent.date_start);
                formData.append('date_end', this.newEvent.date_end);
                formData.append('description_event', this.newEvent.description_event);

                await apiClient.put('/' + this.editingEvent.id, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Event updated successfully.');
                this.resetForm();
                await this.fetchEvents();
            } catch (error) {
                console.error('Error updating event:', error);
            }
        },
        resetForm() {
            console.log('Resetting form.');
            this.newEvent = { title_event: '', date_start: '', date_end: '', description_event: '' };
            this.editingEvent = null;
        },
        cancelEdit() {
            console.log('Editing cancelled.');
            this.editingEvent = null;
            this.resetForm();
        }
    }
});
