<template>
    <v-card class="pa-5">
        <v-form ref="form" v-model="isFormValid" @submit.prevent="createBook">
            <v-text-field v-model="title" label="Título" :rules="[v => !!v || 'Título requerido']" required></v-text-field>
            <v-text-field v-model="author" label="Autor" :rules="[v => !!v || 'Autor requerido']" required></v-text-field>
            <v-text-field v-model="isbn" label="ISBN" :rules="[v => !!v || 'ISBN requerido']" required></v-text-field>
            <v-text-field v-model="language" label="Idioma" required></v-text-field>
            <v-textarea v-model="description" label="Descripción" required></v-textarea>
            <v-textarea v-model="summary" label="Resumen" required></v-textarea>
            <v-textarea v-model="collaborators" label="Colaboradores" required></v-textarea>
            <v-file-input v-model="file" label="Subir PDF" accept=".pdf" :rules="[v => !!v || 'Archivo requerido']" required></v-file-input>

            <v-btn type="submit" color="primary" :disabled="!isFormValid">Subir Libro</v-btn>
        </v-form>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isFormValid: false, // Control de validez del formulario
            type: '',
            title: '',
            author: '',
            isbn: '',
            language: '',
            description: '',
            summary: '',
            content: '',
            collaborators: '',
            file: null, // Archivo de libro
        };
    },
    methods: {
        // Método para manejar el formulario de creación de libro
        async createBook() {
            const formData = new FormData();

            // Agrega los datos del libro
            formData.append('type', this.type);
            formData.append('title', this.title);
            formData.append('author', this.author);
            formData.append('isbn', this.isbn);
            formData.append('language', this.language);
            formData.append('description', this.description);
            formData.append('summary', this.summary);
            formData.append('content', this.content);
            formData.append('collaborators', this.collaborators);

            // Si hay un archivo, agrégalo al FormData
            if (this.file) {
                formData.append('file', this.file);
            }

            try {
                // Realiza la solicitud POST al servidor
                const response = await axios.post('http://localhost:3000/material_bibliografico/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Necesario para enviar archivos
                    },
                });

                // Maneja la respuesta
                console.log('Libro creado:', response.data.message);
            } catch (error) {
                console.error('Error al crear el libro:', error);
            }
        },
    }
};
</script>

<style scoped>
.v-card {
    max-width: 600px;
    margin: auto;
}


.book-form {
    max-width: 600px;
    margin: auto;
}

.book-form label {
    display: block;
    margin-top: 10px;
}

.book-form input,
.book-form textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.book-form button {
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.book-form button:hover {
    background-color: #45a049;
}
</style>