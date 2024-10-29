import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import 'boxicons/css/boxicons.min.css'; 
import App from './App.vue';
import router from './router/index';

import en from './locales/en.json';
import ay from './locales/ay.json';
import es from './locales/es.json';

const i18n = createI18n({
  legacy: false,           // Usa Composition API de vue-i18n
  locale: 'es',            // Idioma predeterminado
  fallbackLocale: 'en',    // Idioma de respaldo
  messages: {
    en,
    ay,
    es
  }
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
