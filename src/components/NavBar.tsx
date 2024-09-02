import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import '../pages/Home.css';

function NavBar() {
  return (
      <nav id="topnav">
        
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/About">
          About
        </NavLink>
        
      </nav>
    
  );
}

export default NavBar;
