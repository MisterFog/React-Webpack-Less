import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Ru from './translations/ru.json';
import En from './translations/en.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ru',
  resources: {
    ru: {
      common: Ru,
    },
    en: {
      common: En,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

