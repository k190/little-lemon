import React from "react";
import './styles.css';
import Logo from '../images/Logo.jpg'
const Nav = () => (
    <nav>
        <div className="nav-logo">
            <img src={Logo} alt="Company Logo" />
        </div>
         <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Reservations</a></li>
            <li><a href="#order-online">Order online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </nav>
);
export default Nav;