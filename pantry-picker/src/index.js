import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './LandingPage.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import page components
import NavPage from "./components/Nav/NavPage.js";
import SignUpForm from './components/SignUp/SignUpForm.js';
import SearchPage from './components/SearchPage.js';
import PantryPage from './components/PantryPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/nav" element={<NavPage />} />
            <Route path="/pantry" element={<PantryPage />} />
            <Route path="/searchup" element={<SearchPage/>} />
            {/*<Route path="/login" element={<LoginPage/>} />*/}
          <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
