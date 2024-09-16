import React from "react";
import './styles.css';
import Logo from '../images/Logo.jpg'
import {routes,route,Link}from 'react-router-dom'
const Nav = () => (
    <nav>
        <div className="nav-logo">
            <img src={Logo} alt="Company Logo" />
        </div>
         <ul className="nav-list">
           
            <Link to="/HomePage"className="HomePage">Home</Link>
            
            <li><a href="#about">About</a></li>
            <Link to="/Main"className="Main">main</Link>
            <li><a href="#menu">Reservations</a></li>
            <li><a href="#order-online">Order online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </nav>
);
export default Nav;