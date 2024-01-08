import React from 'react';
import './LandingPage.css';
import Logo from './logoPP.png';
import { Link } from 'react-router-dom'; 



const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <img src={Logo} alt="App Logo" className="logo" />
        <h1>Recipe Match</h1>
        <p>Your go-to app for quick and delicious recipes!</p>
      </div>
      <div className="footer">
       <Link to={'/signup'}>
         <button>Sign Up</button>
      </Link>
      <Link >
        <button>Login</button>
      </Link>
      <Link to={'/nav'}>
        <button>Continue as Guest</button>
      </Link>
    </div>
   </div>
  );
};

export default LandingPage;