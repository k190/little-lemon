import React from 'react';
import './styles.css';
import restaurantFood from '../images/restauranfood.jpg'
const Highlights = ()=> {
    return(
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
    );
}
export default Highlights;
