import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import tr from './tr.json';
import az from './az.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    az: az,
    tr: tr,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
