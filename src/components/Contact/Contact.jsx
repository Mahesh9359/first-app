import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './../../app.css';
import './Contact.css';

export default function Contact() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <section className="contact-section">
          <h2 className="contact-title">Contact Us</h2>
          

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

