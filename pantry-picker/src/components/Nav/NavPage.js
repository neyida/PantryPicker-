// NavigationPage.js
import React from "react";
import "./NavPage.css";
import Logo from '../../logoPP.png';
import Pantry from './NavIcons/pantryicon.jpeg';
import Recipes from './NavIcons/recipesicon.jpeg';
import Search from './NavIcons/searchicon.jpeg';
import { useState } from "react";


const NavPage = () => {
  const [tooltipVisible, setTooltipVisible] = useState(null);

  const handleIconHover = (index) => {
    setTooltipVisible(index);
  };

  const handleIconLeave = () => {
    setTooltipVisible(null);
  };

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
        <div
          className="tooltip"
          onMouseEnter={() => handleIconHover(1)}
          onMouseLeave={handleIconLeave}
        >
        <img src={Recipes} alt="App Logo" className="logo" />

          <span className={`tooltiptext ${tooltipVisible === 1 ? 'visible' : ''}`}>
            Recipes
          </span>
        </div>
        <div
          className="tooltip"
          onMouseEnter={() => handleIconHover(2)}
          onMouseLeave={handleIconLeave}
        >
          <img src={Pantry} alt="App Logo" className="logo" />
          <span className={`tooltiptext ${tooltipVisible === 2 ? 'visible' : ''}`}>
            Pantry
          </span>
        </div>
        <div
          className="tooltip"
          onMouseEnter={() => handleIconHover(3)}
          onMouseLeave={handleIconLeave}
        >
        <img src={Search} alt="App Logo" className="logo" />
          <span className={`tooltiptext ${tooltipVisible === 3 ? 'visible' : ''}`}>
            Search
          </span>
        
        </div>
      </div>
    </div>
  );
};

export default NavPage;