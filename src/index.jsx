// import core & vendor packages below
import React from 'react';
import ReactDOM from 'react-dom/client';

// import assets below
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/global.scss';

// import components below
import App from './App';

// define root
const root = ReactDOM.createRoot(document.getElementById('root'));

// main component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
