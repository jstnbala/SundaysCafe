// Home.js
import React from 'react';
import sundaysImage from './images/Sundays.png'; // Import the image

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={sundaysImage} alt="Sundays Cafe Restaurant" />
      </div>
      <div className="content-container">
        <h2> "Great Food, Great Memories"  — Here at Sundays Cafe Restaurant</h2>
        <p>Welcome to Sundays Cafe Restaurant, where every craving meets its match on our meticulously crafted menu. 
          From succulent main courses to flavorful pizzas, each dish promises a symphony of flavors that will tantalize your taste buds. 
          Save room for our divine desserts, where sweetness meets sophistication in every bite. Quench your thirst with our refreshing selection of drinks, 
          from cocktails to fine wines. Join us for an unforgettable dining experience where great food and great memories are always on the menu.</p>
      </div>
    </div>
  );
}

export default Home;
