import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, Good Morning! {props.name} {props.emoji}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Greeting name="ABC" emoji="👋" />
        <Greeting name="DEF" emoji="😊" />
        <Greeting name="XYZ" emoji="🫡" />
      </main>
      <Footer />
    </div>
  );
}
