<template>
  <div class="quedar">
    <Header />
  </div>
  <div class="fondo">
    <v-tabs v-model="selectedTab" align-tabs="center" color="deep-purple-accent-4">
      <v-tab>Testimonios</v-tab>
      <v-tab>Form 2</v-tab>
      <v-tab>Carreras</v-tab>
    </v-tabs>
    <div class="container-forms">
      <!-- Formulario 1 -->
      <div v-if="selectedTab === 0">
        <div class="container">
          <h3>Formulario 1</h3>
          <v-form ref="form1" v-model="valid1">
            <v-text-field label="Nombre" v-model="form1Data.name" :rules="[rules.required]" />
            <v-btn @click="submitForm('form1')">Enviar</v-btn>
          </v-form>
        </div>

      </div>

      <!-- Formulario 2 -->
      <div v-if="selectedTab === 1">
        <div class="container">
          <h3>Formulario 2</h3>
          <v-form ref="form2" v-model="valid2">
            <v-text-field label="Email" v-model="form2Data.email" :rules="[rules.email]" />
            <v-btn @click="submitForm('form2')">Enviar</v-btn>
          </v-form>
        </div>
      </div>

      <!-- Formulario 3 -->
      <div v-if="selectedTab === 2">
        <div class="container">
          <h3>Formulario 3</h3>
          <v-form ref="form3" v-model="valid3">
            <v-text-field label="Edad" v-model="form3Data.age" :rules="[rules.number]" />
            <v-btn @click="submitForm('form3')">Enviar</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { ref, reactive } from 'vue';

// Estado reactivo para los datos del formulario
const selectedTab = ref(0);
const valid1 = ref(false);
const valid2 = ref(false);
const valid3 = ref(false);

// Datos de los formularios
const form1Data = reactive({ name: '' });
const form2Data = reactive({ email: '' });
const form3Data = reactive({ age: '' });

// Reglas de validación
const rules = {
  required: (v) => !!v || 'Este campo es obligatorio',
  email: (v) => /.+@.+\..+/.test(v) || 'Debe ser un email válido',
  number: (v) => !isNaN(v) || 'Debe ser un número',
};

// Método para enviar formularios
const submitForm = (formRef, formData) => {
  if (formRef.value.validate()) {
    console.log(`Datos del formulario enviado:`, formData);
    alert('Formulario enviado correctamente');
  } else {
    alert('Errores en el formulario');
  }
};

// Referencias a los formularios
const form1 = ref(null);
const form2 = ref(null);
const form3 = ref(null);
</script>



<style scoped>

.fondo {
  display: flex;
  flex-direction: column; /* Cambia la dirección a columna */
  align-items: center;
  margin-top: 100px;
  width: 100%;
  background-color: aquamarine;
}

.container-forms {
  width: 100%; /* Asegúrate de que ocupe todo el ancho */
  padding: 20px; /* Espaciado interno */
  background-color: blanchedalmond;
}

.container {
  margin: 10px auto; /* Centra cada formulario verticalmente */
  max-width: 500px; /* Limita el ancho del formulario */
  padding: 15px;
  background-color: aqua;
  border: 1px solid black;
  border-radius: 8px; /* Opcional: redondea bordes */
}

.custom-tab {
  color: black;
}

.custom-tab:hover {
  color: var(--azul-hover);
}

.contenido-form {
  height: 100vh;
  width: 100%;
  margin: 10px;
  background-color: rosybrown;
  border: 5px solid black;
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.v-text-field{
  margin: 10px;
}
.quedar{
  position: sticky;
}
/* 
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

.panel-header {
  background-color: white;
  color: rgb(29, 81, 141);
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
}

.v-expansion-panel-content {
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.v-text-field,
.v-textarea {
  background-color: rgba(29, 81, 141, 0.05);
  border-radius: 4px;
}

.v-btn {
  margin: 10px 5px;
  color: white;
  font-weight: bold;
}

.v-btn.primary {
  background-color: rgb(29, 81, 141);
  transition: background-color 0.3s ease;
}

.v-btn.primary:hover {
  background-color: rgba(29, 81, 141, 0.8);
}

.v-btn.error {
  background-color: rgb(200, 50, 50);
  transition: background-color 0.3s ease;
}

.v-btn.error:hover {
  background-color: rgba(200, 50, 50, 0.8);
}




* {
  transition: all 0.3s ease-in-out;
}

.admin-page {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.panel-header {
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.panel-header:hover {
  transform: scale(1.02);
  background-color: rgba(29, 81, 141, 0.1);
}

.v-text-field input:focus,
.v-textarea textarea:focus {
  border-color: rgb(29, 81, 141);
  box-shadow: 0 0 10px rgba(29, 81, 141, 0.3);
}

.v-text-field,
.v-textarea {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-btn {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
}

.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.v-btn.primary:hover {
  background-color: rgba(29, 81, 141, 0.9);
  transform: translateY(-3px) rotate(-1deg);
}

.v-btn.error:hover {
  background-color: rgba(200, 50, 50, 0.9);
  transform: translateY(-3px) rotate(1deg);
}

.v-expansion-panel-content {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
} */
</style>