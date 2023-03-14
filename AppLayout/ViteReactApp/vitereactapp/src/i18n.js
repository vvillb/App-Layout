import i18n, {setDefaultNamespace} from "i18next";
//import { reactI18nextModule } from "react-i18next";
import translationES from "./locales/es/translation.json"
import translationClientEs from '@client-i18n_es';
import { initReactI18next } from 'react-i18next';

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
  .use(initReactI18next)
  .init({
    lng:"es",
    interpolation:{
      escapeValue:false
    },
    ns:['common','client'],
    defaultNS: 'common',
    resources
  });
setDefaultNamespace:('common');

export default i18n