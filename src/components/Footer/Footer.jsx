import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Footer.css';
import { Instagram,Facebook,Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="FoodPanda Logo"
            className="footer-logo"
          />
          <h2>FoodPanda</h2>
          <p>Delivering happiness to your doorstep 🍱</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: Foodpanda@gmail.com</p>
          <p>Phone: +91 9359613329</p>
          <p>Location: Pune, India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
           <br/>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter/></a>
            <a href="#"><Facebook/></a>
            <a href="#"><Linkedin/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodPanda. All rights reserved.</p>
      </div>
    </footer>
  );
}
