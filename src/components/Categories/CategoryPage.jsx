import React from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css';

const dummyFoodItems = {
  pizza: ['Cheese Pizza', 'Veggie Pizza', 'Pepperoni Pizza'],
  dosa: ['Masala Dosa', 'Plain Dosa', 'Cheese Dosa'],
  desserts: ['Chocolate Cake', 'Ice Cream', 'Gulab Jamun'],
  burgers: ['Veg Burger', 'Chicken Burger', 'Cheese Burger'],
  drinks: ['Coke', 'Lemonade', 'Cold Coffee'],
  snacks: ['Samosa', 'Fries', 'Pav Bhaji']
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  const foodItems = dummyFoodItems[categoryName] || [];

  return (
    <div className="category-detail-page">
      <h2 className="categories-title">🍽️ {categoryName.toUpperCase()}</h2>
      <ul className="food-list">
        {foodItems.map((item, index) => (
          <li key={index} className="food-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
