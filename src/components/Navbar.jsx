// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <img src="/images/all.jpeg" alt="All" className="navbar-image" />
            <span>All</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/fullstack" className="navbar-link">
            <img src="/images/fullstack.png" alt="Full Stack Development" className="navbar-image" />
            <span>Full Stack Development</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/datascience" className="navbar-link">
            <img src="/images/datascience.jpeg" alt="Data Science" className="navbar-image" />
            <span>Data Science</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cybersecurity" className="navbar-link">
            <img src="/images/cybersecurity.jpeg" alt="Cyber Security" className="navbar-image" />
            <span>Cyber Security</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/career" className="navbar-link">
            <img src="/images/career.jpeg" alt="Career" className="navbar-image" />
            <span>Career</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
