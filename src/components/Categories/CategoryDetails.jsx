import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function CategoryDetails() {
  const { categoryName } = useParams();
  const [quantity, setQuantity] = useState(0);

  const product = {
    name: `${categoryName} Special`,
    image: 'https://via.placeholder.com/150',
    price: '₹150',
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <div className="category-detail-page">
          <h2 className="categories-title">🍽️ {categoryName.toUpperCase()} Menu</h2>

          <div className="product-grid">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              
              <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              
              <button className='cart-btn' onClick={()=>{
                alert(`${quantity} products added to cart`);
              }}>
                Add To Cart 
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}