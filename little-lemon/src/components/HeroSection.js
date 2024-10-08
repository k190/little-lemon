import React from 'react';
import './styles.css';
import resturantfood from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom';
const HeroSection = ()=> {
    return(
        <div className="Hero-section">
            <article>
                <h1>Little Lemon</h1>
                <h2>chicago</h2>
                <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
               <Link to="/BookingPage">
                 <button aria-label="On Click to Reserve a Table">Reserve a Table</button>
                </Link>                
            </article>
            <article>
                <img src={resturantfood} alt="resturantfoodd" />
            </article>
        </div>
    );
}
export default HeroSection;
