import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2 className="footer-logo">MyWebsite</h2>
        <p>Bringing you closer to the web.</p>
      </div>

      <div className="footer-center">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-right">
        <p>Follow us</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
