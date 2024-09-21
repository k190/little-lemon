import React from 'react';
import './styles.css';
import greekSaladImg from '../images/greek salad.jpg';
import bruschettaImg from '../images/bruchetta.png';
import lemonDessertImg from '../images/lemon dessert.jpg';
const Specials = [
  {
    id: 1,
    title: 'Greek Salad',
    description: 'Grilled bread topped with diced tomatoes, basil, garlic, and olive oil for a fresh, savory bite.',
    image: greekSaladImg,
  },
  {
    id: 2,
    title: 'Bruschetta',
    description: 'Grilled bread topped with diced tomatoes, basil, garlic, and olive oil for a fresh, savory bite.',
    image: bruschettaImg,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    description: 'A light, creamy lemon treat in a buttery crust, often garnished with berries or mint.',
    image: lemonDessertImg,
  },
];
const Highlights = () => {
  return (
    <div className="Specials-page">
      <h1>Our Specials</h1>
      <div className="Specials-list">
        {Specials.map((Specials) => (
          <div key={Specials.id} className="Specials-card">
            <img src={Specials.image} alt={Specials.title} className="Specials-image" />
            <h2>{Specials.title}</h2>
            <p>{Specials.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Highlights;





