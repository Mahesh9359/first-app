import React from 'react';
import './Categories.css';
import pizzaImg from './../../assets/icons/pizza.png';
import dosaImg from './../../assets/icons/masala-dosa.png';
import dessertsImg from './../../assets/icons/dessert.png';
import burgersImg from './../../assets/icons/burger.png';
import drinksImg from './../../assets/icons/soda.png';
import snacksImg from './../../assets/icons/snack.png';

import { Link } from 'react-router-dom';

const categories = [
  { name: 'Pizza', image: pizzaImg },
  { name: 'Dosa', image: dosaImg },
  { name: 'Desserts', image: dessertsImg },
  { name: 'Burgers', image: burgersImg },
  { name: 'Drinks', image: drinksImg },
  { name: 'Snacks', image: snacksImg }
];

export default function Categories() {
  return (
    <section className="categories">
      <h2 className="categories-title">🍕 Popular Food Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) =>  (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
