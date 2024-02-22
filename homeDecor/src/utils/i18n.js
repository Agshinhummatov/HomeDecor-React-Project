// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en.json";
import azTranslation from "../locales/az.json";
import ruTranslation from "../locales/ru.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  az: {
    translation: azTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
