import React from "react";
import './styles.css';
import Logo from '../images/Logo.jpg';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav>
        <div className="nav-logo">  
            <img src={Logo} alt="Company Logo" />
        </div>
        <ul className="nav-list">
            <li>
                <NavLink 
                    to="/HomePage" 
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/About" 
                    className={({ isActive }) => isActive ? "active" : ""}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/Main" 
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Main
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/BookingPage" 
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Reservations
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/OrderOnlinePage" 
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Order Online
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/loginPage" 
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Login
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
