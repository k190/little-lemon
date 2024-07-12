import React from 'react';

const Footer = () => (
    <footer>
        <div className="footer-logo">
            <img src="../images/Logo.jpg" alt="Company Logo" />
        </div>
        <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
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

export default Footer;
