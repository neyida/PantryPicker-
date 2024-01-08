// NavigationPage.js
import React from "react";
import "./NavPage.css";
import Logo from '../logoPP.png';
import Pantry from './pantryicon.png';
import Recipes from './recipesicon.png';
import Serch from './serchicon.png';
import { Link } from "react-router-dom";

const NavPage = () => {

  return (
    <div className="navigation-page">
      <div className="top-section">
        <div className="logo-container">
          <img src={Logo} alt="App Logo" className="logo" />
        </div>
        <div className="description">
          <h2>Start your culinary experience here</h2>
        </div>
      </div>
      <div className="bottom-section">
        {/* Triangle of clickable icons at the bottom */}
          <img src={Recipes} alt="Icon 1" />
          <img src={Pantry} alt="Icon 2" />
          <Link to={'/serchup'}>
          <img src={Serch} alt="Icon 3" />
          </Link>
        </div>
      </div>
  );
};

export default NavPage;
