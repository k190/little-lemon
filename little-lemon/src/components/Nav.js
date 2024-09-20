import React from "react";
import './styles.css';
import Logo from '../images/Logo.jpg'
import {Link}from 'react-router-dom'

const Nav = () => (
    <nav>
        <div className="nav-logo">
            <img src={Logo} alt="Company Logo" />
        </div>
         <ul className="nav-list">
           
            <li><Link to="/HomePage"className="HomePage">Home</Link></li>
            <li><Link to="/About"className="Abouts">About</Link></li>
            <li><Link to="/Main"className="Main">main</Link></li>
            <li> <Link to="/BookingPage">Reservations</Link></li>
            <li> <Link to="/OrderOnlinePage">Order onlinee</Link></li>
            <li> <Link to="/loginPage">login</Link></li>
           
        </ul>
    </nav>
);
export default Nav;