<v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header class="panel-header">Añadir o modificar carreras</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-form ref="formCarreras" v-model="valid" lazy-validation>
          <v-text-field v-model="careerName" :rules="nameRules" label="Nombre de la carrera" required outlined
            dense></v-text-field>

          <v-textarea v-model="careerDescription" label="Descripción de la carrera" required outlined
            dense></v-textarea>

          <v-text-field v-model="careerImage" label="Ruta de la imagen (opcional)" outlined dense></v-text-field>

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
          <v-text-field v-model="newsTitle" :rules="nameRules" label="Título de la noticia" required outlined
            dense></v-text-field>

          <v-textarea v-model="newsDescription" label="Descripción de la noticia" required outlined
            dense></v-textarea>

          <v-text-field v-model="newsImage" label="Ruta de la imagen (opcional)" outlined dense></v-text-field>

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
          <v-text-field v-model="jobRequirements" label="Requisitos" required outlined dense></v-text-field>

          <v-textarea v-model="jobDuties" label="Labores" required outlined dense></v-textarea>

          <v-text-field v-model="jobSchedule" label="Horarios" required outlined dense></v-text-field>

          <v-text-field v-model="jobLocation" label="Lugar" required outlined dense></v-text-field>

          <v-text-field v-model="jobImage" label="Ruta de la imagen (opcional)" outlined dense></v-text-field>

          <v-btn :disabled="!valid" color="primary" @click="validate('formTrabajo')">Guardar</v-btn>
          <v-btn color="error" @click="reset('formTrabajo')">Reset</v-btn>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>