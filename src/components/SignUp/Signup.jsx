import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './../Login/Login.css';

export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  useEffect(() => {
    const getLocalStorageName = localStorage.getItem("name");
    if (getLocalStorageName) {
      setName(getLocalStorageName);
    }
  }, [])
    useEffect(() => {
    const getLocalStorageEmail = localStorage.getItem("email");
    if (getLocalStorageEmail) {
      setEmail(getLocalStorageEmail);
    }
  }, [])
    useEffect(() => {
    const getLocalStoragePassword = localStorage.getItem("password");
    if (getLocalStoragePassword) {
      setPassword(getLocalStoragePassword);
    }
  }, [])

  useEffect(() => {
    const trimmedName = name.trim();

    if (trimmedName.length === 0) {
      setError("Name is required.");
    } else if (trimmedName.length < 3) {
      setError("Name must be at least 3 characters long.");
    } else if (trimmedName.length > 25) {
      setError("Name must be less than 25 characters.");
    } else {
      setError('');
    }
  }, [name]);



  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };


  const saveName = () => {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (error) {
      alert("Please fix the errors before submitting.");
      return;
    }

    localStorage.setItem("name", name);
    alert("Name saved successfully!");
    localStorage.setItem("email", email);
    alert("Email saved successfully!");
    localStorage.setItem("password", password);
    alert("Password saved successfully!");
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="login-main">
        <div className="login-container">
          <h2>Create Account ✨</h2>
          <p>Sign up for FoodPanda</p>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="name" placeholder="Full Name" value={name} onChange={handleInput} required />
            <p className='error-text'>{error}</p>
            <input type="email" name="email" placeholder="Email address" value={email} onChange={handleInput} required />
            <input type="password" name="password" placeholder="Password" value={password} onChange={handleInput} required />
            <button type="submit" className={` ${error ? "btn-disabled" : null}`} onClick={saveName} disabled={!!error} >Sign Up</button>
            <p className="login-link">Already have an account? <a href="/login">Login</a></p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
