import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HerSection/HeroSection';
import Categories from './components/Categories/Categories';
import PopularRestaurants from './components/PopularRestaurants/PopularRestaurants';


export default function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <HeroSection title="Delicious Food Delivered Fast 🍱"/>
        <Categories />
        <PopularRestaurants />
      </main>
      <Footer />
    </div>
  );
}
