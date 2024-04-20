// Desserts.js
import React from 'react';

const Desserts = () => {
  // Define an array of dessert items with their details
  const dessertItems = [
    {
      name: 'Tres Leches Cake',
      image: 'Tres.png' // Image file name
    },
    {
      name: 'Chocolate Temptation Cake',
      image: 'Choco.png' // Image file name
    },
    {
      name: 'Banana Bliss Peanut Butter Waffles',
      image: 'BananaWaf.png' // Image file name
    },
    {
      name: 'Mango Chocolate Delight Waffles',
      image: 'MangoWaf.png' // Image file name
    },
    {
      name: 'Tropical Fruit Medley Waffles',
      image: 'ComboWaf.png' // Image file name
    }
  ];

  return (
    <div className="desserts-container">
      <h2>Sweet Endings Section</h2>
      <p>This is the Desserts Page of Sundays Cafe Restaurant.</p>
      <div className="dessert-gallery">
        {dessertItems.map((dessert, index) => (
          <div key={index} className="dessert-item">
            <img src={`./images/${dessert.image}`} alt={dessert.name} className="dessert-image" />
            <p className="dessert-name">{dessert.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desserts;
