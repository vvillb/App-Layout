
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from "./locales/es/translation.json"
import translationClientEs from '@client-i18n_es';


const resources={
  /*en:{
    translation: enTranslation,
  },*/
  es:{
    common:translationES,
    client:translationClientEs
  }
};

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  lng:"es",
  interpolation:{
    escapeValue:false
  },
ns:['common','client'],
setDefaultNamespace:'common',
resources
  });
  
export default i18n;