import React from 'react';
import './styles.css';
import user1 from '../images/user1.jpeg';
import user2 from '../images/user2.jpeg';
import user3 from '../images/user3.webp';
import user4 from '../images/user4.jpg';

const testimonialsData = [
    {
      id: 1,
      name: 'Alice Johnson',
      rating: 5,
      photo: user1,
      review: 'The Greek salad was amazing! Fresh and full of flavor. Highly recommend!',
    },
    {
      id: 2,
      name: 'Bob Smith',
      rating: 4,
      photo: user2,
      review: 'The bruschetta was delicious. A perfect start to our meal!',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      rating: 5,
      photo: user3,
      review: 'Loved the lemon dessert! It was the perfect ending to our dinner.',
    },
    {
      id: 4,
      name: 'Luci Alvarez',
      rating: 5,
      photo: user4,
      review: 'Absolutely delightful experience!',
    },
  ];
const Testimonials = () => {
  return (
    <div className="Testimonials-page">
      <h1>What Our Customers Say</h1>
      <div className="Testimonials-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="Testimonials-card">
            <img src={testimonial.photo} alt={testimonial.name} className="User-photo" />
            <h2>{testimonial.name}</h2>
            <div className="Star-rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
