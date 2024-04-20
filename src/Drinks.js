// Drinks.js
import React from 'react';

const Drinks = () => {
  return (
    <div className="drinks-container">
      <h2>Best Sellers Drinks</h2>
      <div className="drinks-gallery">
        <div className="drink-item">
          <img src="./images/caramel.png" alt="Caramel Drink" className="drink-image" />
          <h3 className="drink-name">Caramel Delight</h3>
          <p className="drink-description">Indulge in the rich flavor of caramel.</p>
        </div>
        <div className="drink-item">
          <img src="./images/strawberry.png" alt="Strawberry Drink" className="drink-image" />
          <h3 className="drink-name">Strawberry Dream</h3>
          <p className="drink-description">Experience the refreshing taste of ripe strawberries.</p>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
