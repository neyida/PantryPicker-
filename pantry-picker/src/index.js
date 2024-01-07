import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './LandingPage.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import page components
import NavPage from './components/NavPage.js';
import SignUpForm from './components/SignUpForm.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/nav" element={<NavPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
