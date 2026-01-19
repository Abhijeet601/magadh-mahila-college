import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    returnObjects: true,

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    missingKeyHandler: (lngs, ns, key, fallbackValue) => {
      console.warn(`Missing key: ${key} in ${lngs[0]}`);
      if (lngs[0] !== 'en') {
        const enValue = i18n.getFixedT('en')(key);
        if (enValue !== key) {
          return enValue;
        }
      }
      return fallbackValue || key;
    },
  });

export default i18n;
