import React from 'react';
import './PopularRestaurants.css';
import burgerImg from './../../assets/images/burger.jpg';
import dessertsImg from './../../assets/images/dessert.jpg';
import dosaImg from './../../assets/images/south-indian.jpg';
import pizzaImg from './../../assets/images/pizza.jpg';

const restaurantData = [
  {
    name: "The South Special",
    image: dosaImg,
    rating: "4.5 ★",
    foodtype: "Traditional Meal, South Indian"
  },
  {
    name: "Pizza Studio",
    image: pizzaImg,
    rating: "4.7 ★",
    foodtype: "Fast Food, Pizza"
  },
  {
    name: "Burger Nation",
    image: burgerImg,
    rating: "4.4 ★",
    foodtype: "Fast Food, Burgers"
  },
  {
    name: "Sweet Treats",
    image: dessertsImg,
    rating: "4.8 ★",
    foodtype: "Desserts, Bakery"
  }
];

export default function PopularRestaurants() {
  return (
    <section className="popular-restaurants">
      <h2 className="section-title">🍽️ Popular Restaurants Near You</h2>
      <div className="restaurant-grid">
        {restaurantData.map((rest) => (
          <div className="restaurant-card" key={rest.name}>
            <img src={rest.image} alt={rest.name} className="restaurant-img" />
            <div className="restaurant-info">
              <h3>{rest.name}</h3>
              <p>{rest.foodtype}</p>
              <span className="rating-badge">{rest.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
