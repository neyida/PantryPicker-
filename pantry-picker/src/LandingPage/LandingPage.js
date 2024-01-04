
import React from 'react';
import './LandingPage.css';
import Logo from './logoPP.png'; // Corrected path to the image file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <img src={Logo} alt="App Logo" className="logo" />
        <h1>Recipe Match</h1>
        <p>Your go-to app for quick and delicious recipes!</p>
      </div>
      <div className="footer">
        <button>Sign Up</button>
        <button>Login</button>
        <button>Continue as Guest</button>
      </div>
    </div>
  );
};

export default LandingPage;