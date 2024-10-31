<template>
    <v-container class="admin-page">
      <h1>Panel de Administrador</h1>
      <v-expansion-panels>
        <!-- Formulario Carreras -->
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
  
        <!-- Formulario Noticias -->
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
  
        <!-- Formulario Bolsas de Trabajo -->
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
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
        // Validations
        nameRules: [
          v => !!v || 'Este campo es obligatorio',
        ],
      };
    },
    methods: {
      validate(formRef) {
        this.$refs[formRef].validate();
      },
      reset(formRef) {
        this.$refs[formRef].reset();
      },
      resetValidation(formRef) {
        this.$refs[formRef].resetValidation();
      },
    },
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
}

  </style>
  