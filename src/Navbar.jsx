import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="logo" className="logo-img" />
FoodPanda</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <button className="navbar-login">Login</button>
      </ul>
      
    </nav>
  );
}
