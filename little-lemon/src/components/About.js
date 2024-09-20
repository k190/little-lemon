import React from 'react';
import './styles.css';
import restaurantFood from '../images/restauranfood.jpg'
const About = ()=> {
    return(
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
    );
}
export default About;