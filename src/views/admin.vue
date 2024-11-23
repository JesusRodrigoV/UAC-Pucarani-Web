<template>
  <div class="quedar">
    <Header></Header>
  </div>

  <div class="fondo">
    <!-- Tabs -->
    <v-tabs v-model="selectedTab" align-tabs="center" color="deep-purple-accent-4">
      <v-tab @click="changeTab(0)">Testimonios</v-tab>
      <v-tab @click="changeTab(1)">Carreras</v-tab>
      <v-tab @click="changeTab(2)">Noticias</v-tab>
      <v-tab @click="changeTab(3)">Eventos de pastoral</v-tab>
    </v-tabs>
  </div>

  <!-- Área de testimonios -->
  <div class="container-forms" v-if="selectedTab === 0">
    <div class="container">
      <form @submit.prevent="saveOpinion">
        <h2>{{ opinionStore.editingOpinion ? 'Editar' : 'Agregar' }} testimonio</h2>
        <input type="text" v-model="opinionStore.newOpinion.name_person" placeholder="Nombre de la persona" required/>
        <textarea v-model="opinionStore.newOpinion.description_opinion" placeholder="Descripción de la opinión" required></textarea>
        <input type="file" @change="onFileChangeOpinion"/>
        <button type="submit">
          {{ opinionStore.editingOpinion ? 'Actualizar' : 'Agregar' }}
        </button>
        <button v-if="opinionStore.editingOpinion" type="button" @click="cancelEdit">
          Cancelar
        </button>
      </form>
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
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="opinion in opinionStore.opinions_home" :key="opinion.id">
              <td>{{ opinion.id_opinion }}</td>
              <td>{{ opinion.name_person }}</td>
              <td>{{ opinion.description_opinion }}</td>
            <td>
              <img :src="opinion.image_person" alt="Foto de persona" width="50" height="50" />
            </td>
            <td>
              <button @click="editOpinion(opinion)">Editar</button>
              <button @click="opinionStore.deleteOpinion(opinion.id_opinion)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Área de carreras -->
  <div class="container-forms" v-if="selectedTab === 1">
    <div class="container">
      <form @submit.prevent="saveCareer">
        <h2>{{ careerStore.editingCareer ? 'Editar' : 'Agregar' }} carrera</h2>
        <input type="text" v-model="careerStore.newCareer.name_career" placeholder="Nombre de la carrera" required/>
        <input type="file" @change="onFileChangeCareer"/>
        <textarea v-model="careerStore.newCareer.description_career" placeholder="Descripción de la carrera" required></textarea>
        <input type="text" v-model="careerStore.newCareer.duration_career" placeholder="Duración de la carrera" required/>
        <textarea v-model="careerStore.newCareer.study_area" placeholder="Áreas de estudio" required></textarea>
        <textarea v-model="careerStore.newCareer.graduation_modality" placeholder="Modalidades de graduación" required></textarea>
        <button type="submit">
          {{ careerStore.editingCareer ? 'Actualizar' : 'Agregar' }}
        </button>
        <button v-if="careerStore.editingCareer" type="button" @click="cancelEditCareer">
          Cancelar
        </button>
      </form>
    </div>

    <!-- Tabla de carreras -->
    <div class="table-container">
      <h3>Lista de carreras</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagen</th>
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
              <td>
                <img :src="career.image_career" alt="Foto de carrera" width="50" height="50" />
              </td>
              <td>{{ career.name_career }}</td>
              <td>{{ career.duration_career }}</td>
              <td>{{ career.study_area }}</td>
              <td>{{ career.graduation_modality }}</td>
              <td>{{ career.description_career }}</td>
            <td>
              <button @click="editCareer(career)">Editar</button>
              <button @click="careerStore.deleteCareer(career.id_career)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Área de noticias -->
  <div class="container-forms" v-if="selectedTab === 2">
    <div class="container">
      <form @submit.prevent="saveNews">
        <h2>{{ newsStore.editingNews ? 'Editar' : 'Agregar' }} noticia</h2>
        <input type="text" v-model="newsStore.newNews.holder_news" placeholder="Titular de la noticia" required/>
        <input type="file" @change="onFileChange"/>
        <input type="date" id="date_news" v-model="newsStore.newNews.date_news" required />
        <textarea v-model="newsStore.newNews.summary_news" placeholder="Descripción de la noticia" required></textarea>
        <button type="submit">
          {{ newsStore.editingNews ? 'Actualizar' : 'Agregar' }}
        </button>
        <button v-if="newsStore.editingNews" type="button" @click="cancelEditNews">
          Cancelar
        </button>
      </form>
    </div>

    <!-- Tabla de noticias -->
    <div class="table-container">
      <h3>Lista de noticias</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titular</th>
              <th>Imagen</th>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="newss in newsStore.news" :key="newss.id">
              <td>{{ newss.id_news }}</td>
              <td>{{ newss.holder_news }}</td>
            <td>
              <img :src="newss.image_news" alt="Foto de noticia" width="50" height="50" />
            </td>
            <td>{{ newss.date_news }}</td>
            <td>{{ newss.summary_news }}</td>
            <td>
              <button @click="editNews(newss)">Editar</button>
              <button @click="newsStore.deleteNews(newss.id_news)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Área de eventos -->
  <div class="container-forms" v-if="selectedTab === 3">
    <div class="container">
      <form @submit.prevent="saveEvent">
        <h2>{{ eventStore.editingEvent ? 'Editar' : 'Agregar' }} evento de pastoral</h2>
        <input type="text" v-model="eventStore.newEvent.title_event" placeholder="Título del evento" required/>
        <input type="date" id="date_event" v-model="eventStore.newEvent.date_start" required />
        <input type="date" id="date_event" v-model="eventStore.newEvent.date_end" required />
        <textarea v-model="eventStore.newEvent.description_event" placeholder="Descripción del evento" required></textarea>
        <button type="submit">
          {{ eventStore.editingEvent ? 'Actualizar' : 'Agregar' }}
        </button>
        <button v-if="eventStore.editingEvent" type="button" @click="cancelEditEvent">
          Cancelar
        </button>
      </form>
    </div>

    <!-- Tabla de eventos -->
    <div class="table-container">
      <h3>Lista de eventos</h3>
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
                <button @click="editEvent(event)">Editar</button>
                <button @click="eventStore.deleteEvent(event.id_event)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script setup>
import { useOpinionStore } from '../stores/home/homeStore';
import { useCareerStore } from '../stores/career/careerStore';
import { useNewsStore } from '../stores/news/newsStore';
import { useEventStore } from '../stores/pastoral/eventStore';
import { ref } from 'vue';
import Header from './Header.vue';

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
.fondo {
  display: flex;
  flex-direction: column; /* Cambia la dirección a columna */
  align-items: center;
  margin-top: 100px;
  width: 100%;
  background-color: aquamarine;
}

.quedar{
  position: sticky;
}

.container-forms {
  width: 100%; /* Asegúrate de que ocupe todo el ancho */
  padding: 20px; /* Espaciado interno */
  background-color: blanchedalmond;
}

.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th, table td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

table th {
  background-color: #f0f0f0;
}
</style>