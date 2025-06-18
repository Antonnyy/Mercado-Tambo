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
      home: 'Inicio',
      about: 'Nosotros',
      solution: 'Solución',
      participate_menu: 'Participa',
      language: 'Idioma',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome to Clean Market',
      contact: 'Contact',
      participate: 'Join Now',
      faq_title: 'Frequently Asked Questions',
      home: 'Home',
      about: 'About Us',
      solution: 'Solution',
      participate_menu: 'Join',
      language: 'Language',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // idioma por defecto
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
