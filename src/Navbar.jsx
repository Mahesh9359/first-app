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
        FoodPanda
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/login">
            <button className="navbar-login">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
