<template>
  <div class="quedar">
    <HeaderEst />
  </div>

  <div class="fondo">
    <!-- Tabs -->
    <v-tabs v-model="selectedTab" align-tabs="center" color="blue darken-4" dark>
      <v-tab @click="changeTab(0)">Testimonios</v-tab>
      <v-tab @click="changeTab(1)">Carreras</v-tab>
      <v-tab @click="changeTab(2)">Noticias</v-tab>
      <v-tab @click="changeTab(3)">Eventos de pastoral</v-tab>
    </v-tabs>
  </div>

  <!-- Área de testimonios -->
  <div class="container">
    <div class="container-forms" v-if="selectedTab === 0">
      <div class="container">
        <div class="container-formulario">
          <form @submit.prevent="saveOpinion">
            <h2>{{ opinionStore.editingOpinion ? 'Editar' : 'Agregar' }} testimonio</h2>
            <input type="text" v-model="opinionStore.newOpinion.name_person" placeholder="Nombre de la persona"
              required />
            <textarea v-model="opinionStore.newOpinion.description_opinion" placeholder="Descripción de la opinión"
              required></textarea>
            <input type="file" @change="onFileChangeOpinion" />
            <button type="submit">
              {{ opinionStore.editingOpinion ? 'Actualizar' : 'Agregar' }}
            </button>
            <button v-if="opinionStore.editingOpinion" type="button" @click="cancelEdit">
              Cancelar
            </button>
          </form>
        </div>
      </div>

      <!-- Tabla de testimonios -->
      <div class="table-container">
        <h3>Lista de Testimonios</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <!-- <th>Imagen</th> -->
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="opinion in opinionStore.opinions_home" :key="opinion.id">
              <td>{{ opinion.id_opinion }}</td>
              <td>{{ opinion.name_person }}</td>
              <td>{{ opinion.description_opinion }}</td>
              <!-- <td>
                <img :src="opinion.image_person" alt="Foto de persona" width="50" height="50" />
              </td> -->
              <td>
                <!-- <button @click="editOpinion(opinion)"><i class='bx bx-edit editar'></i></button> -->
                <button @click="opinionStore.deleteOpinion(opinion.id_opinion)"><i
                    class='bx bxs-trash eliminar'></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Área de carreras -->
  <div class="container">
    <div class="container-forms" v-if="selectedTab === 1">
      <div class="container">
        <div class="container-formulario">
          <form @submit.prevent="saveCareer">
            <h2>{{ careerStore.editingCareer ? 'Editar' : 'Agregar' }} carrera</h2>
            <input type="text" v-model="careerStore.newCareer.name_career" placeholder="Nombre de la carrera"
              required />
            <input type="file" @change="onFileChangeCareer" />
            <textarea v-model="careerStore.newCareer.description_career" placeholder="Descripción de la carrera"
              required></textarea>
            <input type="text" v-model="careerStore.newCareer.duration_career" placeholder="Duración de la carrera"
              required />
            <textarea v-model="careerStore.newCareer.study_area" placeholder="Áreas de estudio" required></textarea>
            <textarea v-model="careerStore.newCareer.graduation_modality" placeholder="Modalidades de graduación"
              required></textarea>
            <button type="submit">
              {{ careerStore.editingCareer ? 'Actualizar' : 'Agregar' }}
            </button>
            <button v-if="careerStore.editingCareer" type="button" @click="cancelEditCareer">
              Cancelar
            </button>
          </form>
        </div>
      </div>

      <!-- Tabla de carreras -->
      <div class="table-container">
        <h3>Lista de carreras</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <!-- <th>Imagen</th> -->
              <th>Nombre</th>
              <th>Duración</th>
              <th>Áreas de estudio</th>
              <th>Modalidades de graduación</th>
              <th>Descripción de la carrera</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="career in careerStore.careers" :key="career.id">
              <td>{{ career.id_career }}</td>
              <!-- <td>
                <img :src="career.image_career" alt="Foto de carrera" width="50" height="50" />
              </td> -->
              <td>{{ career.name_career }}</td>
              <td>{{ career.duration_career }}</td>
              <td>{{ career.study_area }}</td>
              <td>{{ career.graduation_modality }}</td>
              <td>{{ career.description_career }}</td>
              <td>
                <!-- <button @click="editCareer(career)"><i class='bx bx-edit  editar'></i></button> -->
                <button @click="careerStore.deleteCareer(career.id_career)"><i
                    class='bx bxs-trash eliminar'></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Área de noticias -->
  <div class="container">
    <div class="container-forms" v-if="selectedTab === 2">
      <div class="container">
        <div class="container-formulario">
          <form @submit.prevent="saveNews">
            <h2>{{ newsStore.editingNews ? 'Editar' : 'Agregar' }} noticia</h2>
            <input type="text" v-model="newsStore.newNews.holder_news" placeholder="Titular de la noticia" required />
            <input type="file" @change="onFileChange" />
            <input type="date" id="date_news" v-model="newsStore.newNews.date_news" required />
            <textarea v-model="newsStore.newNews.summary_news" placeholder="Descripción de la noticia"
              required></textarea>
            <button type="submit">
              {{ newsStore.editingNews ? 'Actualizar' : 'Agregar' }}
            </button>
            <button v-if="newsStore.editingNews" type="button" @click="cancelEditNews">
              Cancelar
            </button>
          </form>
        </div>
      </div>

      <!-- Tabla de noticias -->
      <div class="table-container">
        <h3>Lista de noticias</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titular</th>
              <!-- <th>Imagen</th> -->
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="newss in newsStore.news" :key="newss.id">
              <td>{{ newss.id_news }}</td>
              <td>{{ newss.holder_news }}</td>
              <!-- <td>
                <img :src="newss.image_news" alt="Foto de noticia" width="50" height="50" />
              </td> -->
              <td>{{ newss.date_news }}</td>
              <td>{{ newss.summary_news }}</td>
              <td>
                <!-- <button @click="editNews(newss)"><i class='bx bx-edit editar'></i></button> -->
                <button @click="newsStore.deleteNews(newss.id_news)"><i class='bx bxs-trash eliminar'></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Área de eventos -->
  <div class="container">
    <div class="container-forms" v-if="selectedTab === 3">
      <div class="container">
        <div class="container-formulario">
          <form @submit.prevent="saveEvent">
            <h2>{{ eventStore.editingEvent ? 'Editar' : 'Agregar' }} evento de pastoral</h2>
            <input type="text" v-model="eventStore.newEvent.title_event" placeholder="Título del evento" required />
            <input type="date" id="date_event" v-model="eventStore.newEvent.date_start" required />
            <input type="date" id="date_event" v-model="eventStore.newEvent.date_end" required />
            <textarea v-model="eventStore.newEvent.description_event" placeholder="Descripción del evento"
              required></textarea>
            <button type="submit">
              {{ eventStore.editingEvent ? 'Actualizar' : 'Agregar' }}
            </button>
            <button v-if="eventStore.editingEvent" type="button" @click="cancelEditEvent">
              Cancelar
            </button>
          </form>
        </div>
      </div>

      <!-- Tabla de eventos -->
      <div class="table-container">
        <h3 class="table-title">Lista de eventos</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título del evento</th>
              <th>Fecha de inicio</th>
              <th>Fecha de cierre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in eventStore.events" :key="event.id">
              <td>{{ event.id_event }}</td>
              <td>{{ event.title_event }}</td>
              <td>{{ event.date_start }}</td>
              <td>{{ event.date_end }}</td>
              <td>{{ event.description_event }}</td>
              <td>
                <!-- <button @click="editEvent(event)"><i class='bx bx-edit editar'></i></button> -->
                <button @click="eventStore.deleteEvent(event.id_event)"><i class='bx bxs-trash eliminar'></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOpinionStore } from '../stores/home/homeStore';
import { useCareerStore } from '../stores/career/careerStore';
import { useNewsStore } from '../stores/news/newsStore';
import { useEventStore } from '../stores/pastoral/eventStore';
import { ref } from 'vue';
import HeaderEst from './HeaderEst.vue';

// Constante para el nav
const selectedTab = ref(0);
// Constante para testimonios
const opinionStore = useOpinionStore();
// Constante para carreras
const careerStore = useCareerStore();
// Constante para noticias
const newsStore = useNewsStore();
// Constante para eventos
const eventStore = useEventStore();

// ====================================== Área del nav ======================================
const changeTab = (tabIndex) => {
  selectedTab.value = tabIndex;
};

// ====================================== Área de testimonios ======================================
// Llama a fetchOpinions al montar
opinionStore.fetchOpinions();

// Manejar la carga de archivos
const onFileChangeOpinion = (event) => {
  const file = event.target.files[0];
  opinionStore.newOpinion.image_person = file;
};

// Guardar Opinión
const saveOpinion = () => {
  if (opinionStore.editingOpinion) {
    opinionStore.updateExistingOpinion();
  } else {
    opinionStore.addOpinion();
  }
};

// Cancelar edición
const cancelEdit = () => {
  opinionStore.cancelEdit();
};

// Editar una opinión existente
const editOpinion = (opinion) => {
  opinionStore.editingOpinion = opinion;
  opinionStore.newOpinion = { ...opinion };
};

// Eliminar una opinión
const deleteOpinion = (id) => {
  opinionStore.deleteOpinion(id);
};

// ====================================== Área de Carreras ======================================
// Llama a fetchCareers al montar
careerStore.fetchCareers();

// Manejar la carga de archivos
const onFileChangeCareer = (event) => {
  const file = event.target.files[0];
  careerStore.newCareer.image_career = file;
};

// Guardar carrera
const saveCareer = () => {
  if (careerStore.editingCareer) {
    careerStore.updateExistingCareer();
  } else {
    careerStore.addCareer();
  }
};

// Cancelar edición
const cancelEditCareer = () => {
  careerStore.cancelEdit();
};

// Editar una opinión existente
const editCareer = (career) => {
  careerStore.editingCareer = career;
  careerStore.newCareer = { ...career };
};

// Eliminar una opinión
const deleteCareer = (id) => {
  careerStore.deleteCareer(id);
};

// ====================================== Área de Noticias ======================================
newsStore.fetchNews();

// Manejar la carga de archivos
const onFileChange = (event) => {
  const file = event.target.files[0];
  newsStore.newNews.image_news = file;
};

// Guardar noticia
const saveNews = () => {
  if (newsStore.editingNews) {
    newsStore.updateExistingNews();
  } else {
    newsStore.addNews();
  }
};

// Cancelar edición
const cancelEditNews = () => {
  newsStore.cancelEdit();
};

// Editar una noticia existente
const editNews = (newss) => {
  newsStore.editingNews = newss;
  newsStore.newNews = { ...newss };
};

// Eliminar una noticia
const deleteNews = (id) => {
  newsStore.deleteNews(id);
};

// ====================================== Área de eventos pastorales ======================================
// Llama a fetchCareers al montar
eventStore.fetchEvents();

// Guardar eventos
const saveEvent = () => {
  if (eventStore.editingEvent) {
    eventStore.updateExistingEvent();
  } else {
    eventStore.addEvent();
  }
};

// Cancelar edición
const cancelEditEvent = () => {
  eventStore.cancelEdit();
};

// Editar un evento existente
const editEvent = (event) => {
  eventStore.editingEvent = event;
  eventStore.newEvent = { ...event };
};

// Eliminar un evento
const deleteEvent = (id) => {
  eventStore.deleteEvent(id);
};
</script>

<style scoped>
h1,
h2,
h3 {
  color: var(--azul-principal);
}

i {
  font-size: 30px;
  transition: color 0.2s ease-in-out;
}

.editar:hover {
  color: var(--succes-verde);
}

.eliminar {
  color: var(--rojo);
}

.eliminar:hover {
  color: var(--rojo-hover);
}

.container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.fondo {
  display: flex;
  flex-direction: column;
  /* Cambia la dirección a columna */
  align-items: center;
  margin-top: 120px;
  width: 100%;
}

.quedar {
  position: sticky;
}

.container-formulario {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.container-forms {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
}

.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.table-title {
  display: block;
}

table {
  width: 100%;
  border-collapse: collapse;
  
  border-radius: 8px;
  overflow: hidden;
  /* Importante para aplicar bordes redondeados */
}

thead tr {
  background-color: var(--azul-hover);
  /* Color de fondo del encabezado */
}

th {
  padding: 10px;
  text-align: left;
  color: white;
  /* Color del texto */
  border-left: 1px solid #ccc;
  /* Borde izquierdo */
  border-right: 1px solid #ccc;
  /* Borde derecho */
}

th:first-child {
  border-left: none;
  /* Eliminar borde izquierdo del primer encabezado */
}

th:last-child {
  border-right: none;
  /* Eliminar borde derecho del último encabezado */
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
  /* Color de fondo alternado para filas pares */
}

td {
  padding: 10px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

td:first-child {
  border-left: none;
}

td:last-child {
  border-right: none;
}



form {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

form h2 {
  margin-bottom: 20px;
  text-align: center;
  color: var(--azul-principal);
}

form input[type="text"],
form input[type="date"],
form textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
}

form textarea {
  height: 100px;
  resize: vertical;
}

form button {
  padding: 10px 20px;
  margin: 5px;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  background-color: var(--azul-principal);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
}

form button[type="button"] {
  background-color: #757575;
}

form button:hover {
  background-color: var(--azul-hover);
}

form button[type="button"]:hover {
  background-color: #616161;
}
</style>