import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './../../app.css';
import './Services.css';
import { Truck, Clock, Star, Phone } from 'lucide-react';

export default function Services() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <section className="services-section">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">What makes FoodPanda awesome 🍽️</p>

          <div className="services-grid">
            <div className="service-card">
              <Truck size={40} className="service-icon" />
              <h3>Fast Delivery</h3>
              <p>We deliver your favorite food in under 30 minutes, hot and fresh!</p>
            </div>

            <div className="service-card">
              <Clock size={40} className="service-icon" />
              <h3>24/7 Support</h3>
              <p>Day or night, we’re here to assist you with your food orders anytime.</p>
            </div>

            <div className="service-card">
              <Star size={40} className="service-icon" />
              <h3>Top Restaurants</h3>
              <p>Partnered with the best-rated restaurants to bring you quality meals.</p>
            </div>

            <div className="service-card">
              <Phone size={40} className="service-icon" />
              <h3>Easy Ordering</h3>
              <p>Simple and user-friendly interface to order your food in just a few taps.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
