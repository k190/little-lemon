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
           
            <li><Link to="/HomePage"className="HomePage">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/Main"className="Main">main</Link></li>
            <li><a href="#menu">Reservations</a></li>
            <li> <Link to="/BookingPage">Order onlinee</Link></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </nav>
);
export default Nav;