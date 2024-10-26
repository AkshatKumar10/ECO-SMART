


import React from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <a href="/">EcoSmart</a>
      </div>
      <div className="navbar-links" >
        <li><a href="/">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#contactus">Contact</a></li>
        {/* <li><a href="http://127.0.0.1:7860">Chatbot</a></li> */}
      </div>
    </nav>
  );
};

export default Navbar;

