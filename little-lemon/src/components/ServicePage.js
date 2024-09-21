import React from 'react';
import './ServicePage.css';
import dineInImg from '../images/dine-in.jpg';
import takeoutImg from '../images/greek salad.jpg';
import deliveryImg from '../images/restauranfood.jpg';
import cateringImg from '../images/catering.jpg';
const services = [
  {
    id: 1,
    title: 'Dine-In',
    description: 'Enjoy a comfortable and cozy ambiance while you experience our delicious Mediterranean cuisine.',
    image: dineInImg, // Use the imported image here
  },
  {
    id: 2,
    title: 'Takeout',
    description: 'Order your favorite meals for takeout and enjoy them in the comfort of your home.',
    image: takeoutImg, // Use the imported image here
  },
  {
    id: 3,
    title: 'Delivery',
    description: 'Get your favorite dishes delivered to your doorstep, fresh and hot!',
    image: deliveryImg, // Use the imported image here
  },
  {
    id: 4,
    title: 'Catering',
    description: 'We offer catering services for your special events, ensuring your guests enjoy the finest Mediterranean flavors.',
    image: cateringImg, // Use the imported image here
  },
];
const ServicePage = () => {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
