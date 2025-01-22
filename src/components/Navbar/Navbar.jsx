import React, { useState } from 'react';
import './Navbar.css'; // Make sure to add the corresponding CSS file
import Logo from '/Logofull.png'; // Make sure to add the corresponding image file
import { NavLink } from "react-router"


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo"   />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/counselling">Counselling</NavLink></li>
        <li><NavLink to="/Education">Education</NavLink></li>
        <li><NavLink to="/Prereq">Prerequisites</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
