// MainCourse.js
import React from 'react';

const MainCourse = () => {
  // Define an array of food items with their details
  const foodItems = [
    {
      name: 'Homemade Bacon Slab + Kimchi Rice',
      description: 'Savory bacon meets tangy kimchi in this flavorful dish.',
      image: 'Bacon.png' // Image file name
    },
    {
      name: 'Buttermilk Fried Chicken Sandwich',
      description: 'Crispy chicken, creamy slaw, and zesty pickles make for a satisfying bite.',
      image: 'BGbuttermilk.png' // Image file name
    },
    {
      name: 'Sauteed Cornbeef with Fried Rice and Egg',
      description: 'Hearty corned beef paired with fragrant fried rice and a perfectly cooked egg.',
      image: 'Cornbeef.png' // Image file name
    }
  ];

  return (
    <div className="main-course-container">
      {foodItems.map((food, index) => (
        <div key={index} className="food-card">
          <img src={`./images/${food.image}`} alt={food.name} className="food-image" />
          <div className="food-details">
            <h3 className="food-name">{food.name}</h3>
            <p className="food-description">{food.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainCourse;
