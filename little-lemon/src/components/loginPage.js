import React, { useState } from 'react';
import './loginPage.css';
import Logo from '../images/Logo.jpg'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
    
    // Clear any previous errors
    setError('');

    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // You could add a redirect after successful login here
  };

  return (
    <div className="login-page">
      <div className="nav-logo">
         <img src={Logo} alt="Company Logo" />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        
        {error && <p className="error">{error}</p>}
        
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
