import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "hi, it's",
      password: 'Contraseña',
      email: 'Correo electrónico',
      next: 'Siguiente',
    },
  },
  es: {
    translation: {
      greeting: 'hola, soy',
      password: 'Password',
      email: 'Email',
      next: 'Next',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;