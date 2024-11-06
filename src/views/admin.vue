<template>
  <v-container class="admin-page">
    <h1>Panel de Administrador</h1>
    <v-tabs v-model="activeTab" background-color="white">
      <v-tab>Formulario Carreras</v-tab>
      <v-tab>Formulario Noticias</v-tab>
      <v-tab>Formulario Trabajo</v-tab>
      <v-tab>Formulario Inicio</v-tab>
      <v-tab>Formulario Actividades pastorales</v-tab>
      <v-tab>Formulario Biblioteca</v-tab>
    </v-tabs>

    <!-- Formulario Carreras -->
    <v-expansion-panels v-show="activeTab === 0">
      <v-expansion-panel>
        <v-expansion-panel-header class="panel-header">Añadir o modificar carreras</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="formCarreras" v-model="valid" lazy-validation>
            <v-text-field
              v-model="careerName"
              :rules="nameRules"
              label="Nombre de la carrera"
              required
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="careerDescription"
              label="Descripción de la carrera"
              required
              outlined
              dense
            ></v-textarea>
            <v-text-field
              v-model="careerImage"
              label="Ruta de la imagen (opcional)"
              outlined
              dense
            ></v-text-field>
            <v-btn :disabled="!valid" color="primary" @click="validate('formCarreras')">Guardar</v-btn>
            <v-btn color="error" @click="reset('formCarreras')">Reset</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Formulario Noticias -->
    <v-expansion-panels v-show="activeTab === 1">
      <v-expansion-panel>
        <v-expansion-panel-header class="panel-header">Añadir o modificar noticias</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="formNoticias" v-model="valid" lazy-validation>
            <v-text-field
              v-model="newsTitle"
              :rules="nameRules"
              label="Título de la noticia"
              required
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="newsDescription"
              label="Descripción de la noticia"
              required
              outlined
              dense
            ></v-textarea>
            <v-text-field
              v-model="newsImage"
              label="Ruta de la imagen (opcional)"
              outlined
              dense
            ></v-text-field>
            <v-btn :disabled="!valid" color="primary" @click="validate('formNoticias')">Guardar</v-btn>
            <v-btn color="error" @click="reset('formNoticias')">Reset</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Formulario Trabajo -->
    <v-expansion-panels v-show="activeTab === 2">
      <v-expansion-panel>
        <v-expansion-panel-header class="panel-header">Añadir o modificar bolsas de trabajo</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="formTrabajo" v-model="valid" lazy-validation>
            <v-text-field
              v-model="jobRequirements"
              label="Requisitos"
              required
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="jobDuties"
              label="Labores"
              required
              outlined
              dense
            ></v-textarea>
            <v-text-field
              v-model="jobSchedule"
              label="Horarios"
              required
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="jobLocation"
              label="Lugar"
              required
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="jobImage"
              label="Ruta de la imagen (opcional)"
              outlined
              dense
            ></v-text-field>
            <v-btn :disabled="!valid" color="primary" @click="validate('formTrabajo')">Guardar</v-btn>
            <v-btn color="error" @click="reset('formTrabajo')">Reset</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Formulario Inicio -->
    <v-expansion-panels v-show="activeTab === 3">
      <v-expansion-panel>
        <v-expansion-panel-header class="panel-header">Añadir o modificar información de inicio</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="formInicio" v-model="valid" lazy-validation>
            <v-text-field
              v-model="inicioTitle"
              label="Título"
              required
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="inicioDescription"
              label="Descripción"
              required
              outlined
              dense
            ></v-textarea>
            <v-btn :disabled="!valid" color="primary" @click="validate('formInicio')">Guardar</v-btn>
            <v-btn color="error" @click="reset('formInicio')">Reset</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Formulario Actividades Pastorales -->
    <v-expansion-panels v-show="activeTab === 4">
      <v-expansion-panel>
        <v-expansion-panel-header class="panel-header">Añadir o modificar actividades pastorales</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="formActividadesPastorales" v-model="valid" lazy-validation>
            <v-text-field
              v-model="pastoralActivity"
              label="Actividad"
              required
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="pastoralDescription"
              label="Descripción"
              required
              outlined
              dense
            ></v-textarea>
            <v-btn :disabled="!valid" color="primary" @click="validate('formActividadesPastorales')">Guardar</v-btn>
            <v-btn color="error" @click="reset('formActividadesPastorales')">Reset</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Formulario Biblioteca -->
    <v-expansion-panels v-show="activeTab === 5">
      <v-expansion-panel>
        <v-expansion-panel-header class="panel-header">Añadir o modificar biblioteca</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="formBiblioteca" v-model="valid" lazy-validation>
            <v-text-field
              v-model="librarySection"
              label="Sección"
              required
              outlined
              dense
            ></v-text-field>
            <v-textarea
              v-model="libraryDescription"
              label="Descripción"
              required
              outlined
              dense
            ></v-textarea>
            <v-btn :disabled="!valid" color="primary" @click="validate('formBiblioteca')">Guardar</v-btn>
            <v-btn color="error" @click="reset('formBiblioteca')">Reset</v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      valid: true,
      // Formulario Carreras
      careerName: '',
      careerDescription: '',
      careerImage: '',
      // Formulario Noticias
      newsTitle: '',
      newsDescription: '',
      newsImage: '',
      // Formulario Trabajo
      jobRequirements: '',
      jobDuties: '',
      jobSchedule: '',
      jobLocation: '',
      jobImage: '',
      // Formulario Inicio
      inicioTitle: '',
      inicioDescription: '',
      // Formulario Actividades Pastorales
      pastoralActivity: '',
      pastoralDescription: '',
      // Formulario Biblioteca
      librarySection: '',
      libraryDescription: '',
      // Validations
      nameRules: [
        v => !!v || 'Este campo es obligatorio',
      ],
    };
  },
  methods: {
    validate(formRef) {
      if (this.$refs[formRef]) {
        this.$refs[formRef].validate();
      }
    },
    reset(formRef) {
      if (this.$refs[formRef]) {
        this.$refs[formRef].reset();
      }
    },
  },
};
</script>



  
<style scoped>
/* Contenedor principal */
.admin-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: linear-gradient(145deg, rgba(29, 81, 141, 0.95), rgba(29, 81, 141, 0.7));
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
}

/* Título */
h1 {
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
  letter-spacing: 1px;
}

/* Paneles de Expansión */
.v-expansion-panel-content {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}
.v-expansion-panel-content:hover {
  transform: translateY(-3px);
}

/* Headers de paneles */
.panel-header {
  background-color: rgb(29, 81, 141);
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.panel-header:hover {
  background-color: rgba(2, 25, 51, 0.9);
  transform: scale(1.03);
}

/* Campos de Texto */
.v-text-field,
.v-textarea {
  background-color: rgba(29, 81, 141, 0.1);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
.v-text-field input:focus,
.v-textarea textarea:focus {
  border-color: rgb(29, 81, 141);
  box-shadow: 0 0 10px rgba(29, 81, 141, 0.3);
}

/* Botones */
.v-btn {
  font-weight: bold;
  color: white;
  border-radius: 8px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 10px 5px;
}

.v-btn.primary {
  background-color: rgb(29, 81, 141);
}
.v-btn.primary:hover {
  background-color: rgba(29, 81, 141, 0.9);
  transform: translateY(-2px) rotate(-1deg);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.v-btn.error {
  background-color: rgb(200, 50, 50);
}
.v-btn.error:hover {
  background-color: rgba(200, 50, 50, 0.9);
  transform: translateY(-2px) rotate(1deg);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

/* Tabs */
.v-tab {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 0.7rem;
  text-transform: uppercase;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0 5px;
}
.v-tab:hover {
  color: rgba(255, 255, 255, 0.8);
  transform: scale(1.05);
}
.v-tab--active {
  color: white !important;
  background-color: rgb(29, 81, 141);
  border-radius: 10px;
}

/* Sombras y Transiciones Generales */
* {
  transition: all 0.3s ease-in-out;
}
.admin-page:hover {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
}
</style>
