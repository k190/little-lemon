import React from 'react';
import './styles.css';
import restaurantFood from '../images/restauranfood.jpg'
const Testimonials = ()=> {
    return(
        <div className="testimonials">
            <h1>Testimonials</h1>
            {[1, 2, 3, 4].map((_, index) => (
            <article key={index}>
                <img src={restaurantFood} alt="restaurant food" />
                <p>Our customers love us! Hear what they have to say.</p>
            </article>
            ))}
        </div>
    );
}
export default Testimonials;