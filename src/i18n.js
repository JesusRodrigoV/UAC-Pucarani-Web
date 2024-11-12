import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';
import ay from './locales/ay.json';

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es,
    en,
    ay
  }
});

export default i18n;
