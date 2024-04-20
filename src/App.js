// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import MainCourse from './MainCourse'; // Assuming you have components for MainCourse, Pizza, Desserts, and Drinks
import Pizza from './Pizza';
import Desserts from './Desserts';
import Drinks from './Drinks';
import Contact from './Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Sundays Cafe Restaurant</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/main-course">MAIN COURSE</Link>
            </li>
            <li>
              <Link to="/pizza">PIZZA</Link>
            </li>
            <li>
              <Link to="/desserts">DESSERTS</Link>
            </li>
            <li>
              <Link to="/drinks">DRINKS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main-course" element={<MainCourse />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
