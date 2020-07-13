import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { messages as messagesRo } from "./ro/messages";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ro',
    react: {
      transKeepBasicHtmlNodesFor: [
        'h1',
        'h2',
        'p',
        'ul',
        'li',
        'a',
      ],
    },
    lng: 'ro',
    debug: true,
    resources: {
      ro: {
        translation: messagesRo
      }
    },
  });

export default i18n;
