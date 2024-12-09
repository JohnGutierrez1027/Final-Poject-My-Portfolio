import React from 'react';
import '../App.css';  // If you have a specific CSS file for Footer styling

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <p>© 2024 John Gutierrez-My Portfolio || All Rights Reserved.</p>
    </div>
    <div className="social-links">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/github.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  </footer>
);

export default Footer;
