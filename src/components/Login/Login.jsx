import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="login-main">
        <div className="login-container">
          <h2>Welcome Back! 👋</h2>
          <p>Login to your FoodPanda account</p>
          <form className="login-form">
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="login-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
