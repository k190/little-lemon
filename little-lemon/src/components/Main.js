import React from 'react';
import './styles.css';
import restaurantFood from '../images/restauranfood.jpg'; // Fixed variable name
import { Link } from 'react-router-dom';
import  HeroSecrion from './HeroSection'
import BookingPage from './BookingPage';
const Main = () => {
  return (
    <div className="main-content">
        
      {/* Hero Section */}
      <div>
      <HeroSecrion />
      </div>
      {/* Highlights Section */}
      <div className="highlights">
        <h1>Specials</h1>
        {[1, 2, 3].map((_, index) => (
          <article key={index}>
            <img src={restaurantFood} alt="restaurant food" />
            <h2>Greek Salad</h2>
            <p>Enjoy our delicious Greek salad made with fresh ingredients.</p>
          </article>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h1>Testimonials</h1>
        {[1, 2, 3, 4].map((_, index) => (
          <article key={index}>
            <img src={restaurantFood} alt="restaurant food" />
            <p>Our customers love us! Hear what they have to say.</p>
          </article>
        ))}
      </div>

      {/* About Section */}
      <div className="About">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant focused on delivering the best quality food with a touch of love.
          </p>
        </article>
        <article>
          <img src={restaurantFood} alt="restaurant food" />
        </article>
      </div>
    </div>
  );
};

export default Main;
