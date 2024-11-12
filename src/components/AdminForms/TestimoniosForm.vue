<template>
    <v-card class="pa-5">
      <v-form ref="form" v-model="isFormValid" @submit.prevent="submitForm">
        <h2>Agregar Nueva Noticia</h2>
  
        <v-text-field
          v-model="news.title"
          label="Título"
          :rules="[v => !!v || 'Título requerido']"
          required
        ></v-text-field>
  
        <v-textarea
          v-model="news.content"
          label="Contenido"
          :rules="[v => !!v || 'Contenido requerido']"
          required
        ></v-textarea>
  
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="news.date"
              label="Fecha de Publicación"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="news.date"
            @input="menu = false"
          ></v-date-picker>
        </v-menu>
  
        <v-file-input
          v-model="news.image"
          label="Subir Imagen"
          accept="image/*"
          :rules="[v => !!v || 'Imagen requerida']"
          required
        ></v-file-input>
  
        <v-btn type="submit" color="primary" :disabled="!isFormValid">
          Publicar Noticia
        </v-btn>
      </v-form>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        news: {
          title: '',
          content: '',
          date: '',
          image: null,
        },
        isFormValid: false,
        menu: false,
      };
    },
    methods: {
      submitForm() {
        // Aquí podrías enviar los datos a tu backend
        console.log("Noticia enviada:", this.news);
        this.resetForm();
      },
      resetForm() {
        this.news.title = '';
        this.news.content = '';
        this.news.date = '';
        this.news.image = null;
        this.isFormValid = false;
        this.$refs.form.reset();
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    max-width: 600px;
    margin: auto;
  }
  </style>
  