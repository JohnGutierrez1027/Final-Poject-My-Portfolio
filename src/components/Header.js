import React from 'react';
import '../App.css';  // Ensure that the correct CSS file is imported

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>MY PORTFOLIO - CS601 WEB APPLICATION DEVELOPMENT</h1>
    </div>
    <div className="social-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/github.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  </header>
);

export default Header;


