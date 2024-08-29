import React from 'react';
import './styles.css';
import resturantfood from '../images/restauranfood.jpg'

const Main = () => {
    return (
        <div className="main-content">
            <div className="Hero-section">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>chicago</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                    <button>Reserv a Table</button>                  
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                </article>
            </div>
            <div className="highlights">
                <h1>Specials</h1>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <h2>greek salad</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <h2>greek salad</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <h2>greek salad</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>

            </div>
            <div className="testimonials">
                <h1>Testimonials</h1>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                 <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                 <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>

            </div>
            <div className='About'>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>chicago</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                </article>
              

            </div>
        </div>   
    );
}

export default Main;
