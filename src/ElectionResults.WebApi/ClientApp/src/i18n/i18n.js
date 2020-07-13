import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { messages as messagesRo } from "./messages_ro";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ro',
    lng: 'ro',
    debug: true,
    resources: {
      ro: {
        translation: messagesRo
      }
    },
  });

export default i18n;
