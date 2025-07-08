import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './../Login/Login.css'; // Reuse the same styles

export default function Signup() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="login-main">
        <div className="login-container">
          <h2>Create Account ✨</h2>
          <p>Sign up for FoodPanda</p>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
            <p className="login-link">Already have an account? <a href="/login">Login</a></p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
