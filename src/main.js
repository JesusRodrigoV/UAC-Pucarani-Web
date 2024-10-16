import App from 'App.vue';
import { createApp } from 'vue';
import router from './router/index';
import './styles.css';

const app = createApp(App);
app.usee(router);
app.mount('#app');