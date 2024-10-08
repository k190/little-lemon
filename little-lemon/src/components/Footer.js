import React from 'react';
import './styles.css';
import Logo_footer from '../images/Logo_footer.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    
    return (
        <footer>
            <div className="footer-logo"> 
                <img src={Logo_footer} alt="Company Logo" />
            </div>
            <div className="footer-nav">
                <h4>Quick Links</h4>
                <ul> 
                    <li>
                        <Link to="/HomePage" className={location.pathname === "/HomePage" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>About</Link>
                    </li>
                    <li>
                        <Link to="/ServicePage" className={location.pathname === "/ServicePage" ? "active" : ""}>Services</Link>
                    </li>
                    <li>
                        <Link to="/ContactPage" className={location.pathname === "/ContactPage" ? "active" : ""}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>1234 Street Name<br />City, State, 12345</p>
                <p>Email: <a href="mailto:info@company.com">info@company.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
            </div>
            <div className="footer-social">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

