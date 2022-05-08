import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationIT from './locales/it/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  it: {
    translation: translationIT,
  },
  en: {
    translation: translationEN,
  },
};

const defaultLng = localStorage.getItem('language') || 'it';

i18n.use(initReactI18next).init(
  {
    resources,
    lng: defaultLng,

    interpolation: {
      escapeValue: false,
    },
  },
  err => {
    if (err) console.error('i18n Error', err);
  }
);

export default i18n;
