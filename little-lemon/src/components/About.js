import React from 'react';
import './styles.css';
import MaroandAdrian from '../images/Mario and Adrian A.jpg'
const About = ()=> {
    return(
        <div className="About">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon Restaurant is a charming eatery nestled in the heart of Chicago, celebrated for its vibrant atmosphere and fresh, Mediterranean-inspired cuisine. With a menu that features a delightful array of dishes, including crisp Greek salads, flavorful bruschetta, and decadent lemon desserts, Little Lemon is dedicated to using locally sourced ingredients to create authentic flavors. 
                </p>
            </article>
            <article>
                <img src={MaroandAdrian} alt="MaroandAdrian" className="About-image"/>
            </article>
        </div>
    );
}
export default About;