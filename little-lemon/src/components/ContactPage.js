import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Here you could send the formData to your server using an API call.
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Main Street, Chicago, IL 60601</p>
        <p><strong>Phone:</strong> +1 312-555-1234</p>
        <p><strong>Email:</strong> contact@littlelemon.com</p>
      </div>
      
      {/* Google Maps Integration */}
      <div className="map-container">
        <iframe
          title="Little Lemon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5636278158355!2d-122.4194155843022!3d37.77492977975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a11e6ffb%3A0xd77a4be204d0587!2sLittle+Lemon!5e0!3m2!1sen!2sus!4v1635257902797!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Send Us a Message</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {/* Success Message */}
      {submitted && (
        <div className="success-message">
          <p>Thank you! Your message has been sent.</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
