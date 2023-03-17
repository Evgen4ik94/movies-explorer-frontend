import './vendor/fonts/fonts.css'
import './vendor/normalize.css';

import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';

import React from 'react';
import App from './components/App/App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  );
