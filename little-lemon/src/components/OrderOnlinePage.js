import React, { useState } from 'react';
import './OrderOnlinePage.css';

const menuItems = [
  { id: 1, name: 'Grilled Chicken Shawarma', price: 12.99 },
  { id: 2, name: 'Falafel Wrap', price: 8.99 },
  { id: 3, name: 'Greek Salad', price: 7.99 },
  { id: 4, name: 'Lemon-Herb Fish', price: 14.99 },
];

const OrderOnlinePage = () => {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [error, setError] = useState('');

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!customerName || cart.length === 0) {
      setError('Please enter your name and add at least one item to the cart.');
      return;
    }

    setError('');
    console.log('Order submitted:', { customerName, cart });
    alert(`Thank you, ${customerName}! Your order has been placed.`);

    // Reset the form and cart after submitting the order
    setCustomerName('');
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  return (
    <div className="order-page">
      <h1>Order Online</h1>
      
      {/* Menu Section */}
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Cart Section */}
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <h3>Total: ${getTotal()}</h3>
      </div>
      
      {/* Order Form */}
      <form onSubmit={handleOrderSubmit} className="order-form">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
        />
        {error && <p className="error">{error}</p>}
        
        <button type="submit" className="order-button">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderOnlinePage;
