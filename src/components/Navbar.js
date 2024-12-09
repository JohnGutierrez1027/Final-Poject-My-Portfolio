import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sidebar">
    <ul>
      <li>
        <Link to="/">
          <img src="/images/home.png" alt="Home Icon" className="icon" />
          Home
        </Link>
      </li>
      <li>
        <Link to="/biography">
          <img src="/images/bio.png" alt="Biography Icon" className="icon" />
          Biography
        </Link>
      </li>
      <li>
        <Link to="/interests">
          <img src="/images/interest.png" alt="Interests Icon" className="icon" />
          Interests
        </Link>
      </li>
      <li>
        <Link to="/skills">
          <img src="/images/skills.png" alt="Skills Icon" className="icon" />
          Skills
        </Link>
      </li>
      <li>
        <Link to="/resume">
          <img src="/images/resume.png" alt="Resume Icon" className="icon" />
          Resume
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <img src="/images/contact.png" alt="Contact Icon" className="icon" />
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
