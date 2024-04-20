import React from 'react';

const Pizza = () => {
  const pizzaItems = [
    {
      name: 'Prosciutto and Arugula Pizza',
      description: 'Delicious pizza topped with prosciutto, fresh arugula, and tangy tomato sauce.',
      image: 'Prosciutto.png'
    },
    {
      name: 'The Cheesy Cinco Queso Pizza',
      description: 'A cheesy delight with five different kinds of cheeses, melted to perfection.',
      image: 'CincoQueso.png'
    },
    {
      name: 'Pesto Mushroom Bacon Pizza',
      description: 'Savory pizza featuring pesto sauce, mushrooms, crispy bacon, and gooey cheese.',
      image: 'PestoPizza.png'
    }
  ];

  return (
    <div className="pizza-container">
      {pizzaItems.map((pizza, index) => (
        <div key={index} className="pizza-card">
          <img src={`./images/${pizza.image}`} alt={pizza.name} className="pizza-image" />
          <div className="pizza-details">
            <h3 className="pizza-name">{pizza.name}</h3>
            <p className="pizza-description">{pizza.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pizza;
