<template>
    <v-container class="admin-page">
      <h1>Panel de Administrador</h1>
      
      <!-- Contenedor de las pestañas -->
      <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
        <v-tab key="1">Tab1</v-tab>
        <v-tab key="2">Tab2</v-tab>
        <v-tab key="3">Tab3</v-tab>
      </v-tabs>
  
      <!-- Contenedor de los contenidos de cada pestaña -->
      <v-tabs-items v-model="tab">
        <v-tab-item value="1">
          <tab1 />
        </v-tab-item>
        <v-tab-item value="2">
          <tab2 />
        </v-tab-item>
        <v-tab-item value="3">
          <tab3 />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </template>
  
  <script>
  import Tab1 from '../components/AdminForms/NoticiasForm.vue';
  import Tab2 from '../components/AdminForms/LibrosForm.vue';
  import Tab3 from '../components/AdminForms/TestimoniosForm.vue';
  
  export default {
    components: {
      Tab1,
      Tab2,
      Tab3
    },
    data() {
      return {
        tab: 1, // Indica la pestaña activa inicial
      };
    }
  };
  </script>
  
  <style scoped>
  .admin-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: rgb(29, 81, 141);
    padding: 40px;
    border-radius: 8px;
  }
  
  h1 {
    color: white;
    font-weight: bold;
    margin-bottom: 20px;
  }
  </style>
  