import React from 'react';
import './Footer.css';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section about">
          <img src={logo} alt="" />
          <p>
            For a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#contactus">Contact Us</a></li>
            {/* <li><a href="#dashboard">Dashboard</a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><i className="fas fa-map-marker-alt"></i> 123 Eco Street, Green City</p>
          <p><i className="fas fa-phone"></i> +1 234 567 890</p>
          <p><i className="fas fa-envelope"></i> contact@ecowaste.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EcoWaste | Designed by Segregation Squad</p>
      </div>
    </footer>
  );
};

export default Footer;
