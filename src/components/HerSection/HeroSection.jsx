import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

export default function HeroSection(props) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{props.title}</h1>
          <p>Craving something tasty? We bring your favorite meals to your doorstep in just minutes.</p>
          <Link to="/services" className="hero-btn">Order Now</Link>
        </div>
      </div>
    </section>
  );
}
