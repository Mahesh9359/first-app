import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="logo"
          className="logo-img"
        />
        <span className="logo-text">FoodPanda</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li>
          <Link to="/login" className="navbar-login">
            <span className="login-text">Login</span>
            <span className="login-icon">→</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}