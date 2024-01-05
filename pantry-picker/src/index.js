import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './LandingPage.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationPage from './componets/NavPage.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
