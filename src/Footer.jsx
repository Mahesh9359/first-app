import React from 'react';
import './Footer.css';
import { Instagram } from 'lucide-react';

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
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@foodpanda.com</p>
          <p>Phone: +91 9359613329</p>
          <p>Location: Pune, India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
           <br/>
            <a href="#"><Instagram /></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodPanda. All rights reserved.</p>
      </div>
    </footer>
  );
}
