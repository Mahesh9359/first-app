import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './../../app.css';
import './About.css';

export default function About() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>About FoodPanda</h2>
              <h4>Delivering Happiness Since 2025</h4>
              <p>
                At FoodPanda, we believe food is not just about satisfying hunger — it's an experience.
                We connect you to your favorite local restaurants and deliver meals to your doorstep
                quickly, hot, and fresh. With real-time tracking, exclusive deals, and a wide variety of cuisines,
                we aim to make food ordering effortless and joyful.
              </p>
              <p>
                Whether you're craving biryani, burgers, or bubble tea — we've got you covered. Join millions of happy customers
                and let FoodPanda bring deliciousness to your door!
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="About FoodPanda"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
