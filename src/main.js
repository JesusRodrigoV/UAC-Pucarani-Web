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
  locale: 'es',
  fallbackLocale: 'en', 
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


  