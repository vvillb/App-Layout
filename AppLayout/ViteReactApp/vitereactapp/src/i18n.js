import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import {translationES} from "./plugins/client1/i18n/es/client.json"
import './plugins/client1/i18n/es/client.json';


i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    lng: "es",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    resources:{
        es: {
          translation: {translationES},
        },}
    


    });
  

export default i18n