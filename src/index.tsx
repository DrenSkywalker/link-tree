import * as React from 'react';
import {createRoot} from 'react-dom/client';

import './i18n';

import {AppProvider} from './context/app.context';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
