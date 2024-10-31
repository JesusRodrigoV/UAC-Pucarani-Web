import 'boxicons/css/boxicons.min.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router/index';
import './style.css';

import ay from './locales/ay.json';
import en from './locales/en.json';
import es from './locales/es.json';
import vuetify from './plugins/vuetify';


import { createPinia } from 'pinia';

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: { en, ay, es },
});

const app = createApp(App);
const pinia = createPinia();
app.use(vuetify);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount('#app');
