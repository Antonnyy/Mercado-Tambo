// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      welcome: 'Bienvenido a Mercado Limpio',
      contact: 'Contacto',
      participate: 'Participa',
      faq_title: 'Preguntas Frecuentes',
      // Agrega más claves aquí...
    },
  },
  en: {
    translation: {
      welcome: 'Welcome to Clean Market',
      contact: 'Contact',
      participate: 'Join Now',
      faq_title: 'Frequently Asked Questions',
      // Más traducciones...
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
