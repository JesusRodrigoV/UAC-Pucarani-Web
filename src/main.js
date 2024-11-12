import 'boxicons/css/boxicons.min.css';
import { createApp } from 'vue';
import i18n from './i18n';
import App from './App.vue';
import router from './router/index';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.css';



import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import { aliases, fa } from 'vuetify/iconsets/fa'; 

import { createPinia } from 'pinia';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});


const app = createApp(App);
const pinia = createPinia();

app.use(vuetify);
app.use(router);
app.use(i18n);
app.use(pinia);

app.mount('#app');
