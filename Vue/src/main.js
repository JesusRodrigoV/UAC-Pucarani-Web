import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import 'boxicons/css/boxicons.min.css'; 
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import App from './App.vue';
import router from './router/index';

import en from './locales/en.json';
import ay from './locales/ay.json';
import es from './locales/es.json';

import { createPinia } from 'pinia';

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en,
    ay,
    es
  }
});



loadFonts();



const app = createApp(App);
const pinia = createPinia();
app.use(vuetify);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount('#app');
