import React from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './../../App.css'


export default function CategoryDetails() {
  const { categoryName } = useParams();

  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <div className="category-detail-page">
          <h2 className="categories-title">🍽️This is {categoryName.toUpperCase()} Category</h2>
        </div>
      </main>
      <Footer />
    </div>

  );
}
