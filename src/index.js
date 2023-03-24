import './vendor/fonts/fonts.css'
import './vendor/normalize.css';

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './components/App/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  );
