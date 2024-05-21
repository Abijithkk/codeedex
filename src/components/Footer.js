// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img  src="https://i.postimg.cc/7L5WS7qQ/Screenshot-2024-05-06-125647-removebg-preview.png" alt="Company Logo" className="logo" />
        <p className='logopara'><b>Unlocking the digital realm with excellence, Codeedex pioneers innovation and simplicity.</b></p>
      </div>
      <div className="footer-section">
        <h3><b>Quick Links</b></h3>
        <ul>
          <li><a href="#"><b>Home</b></a></li>
          <li><a href="#"><b>Services</b></a></li>
          <li><a href="#"><b>Portfolio</b></a></li>
          <li><a href="#"><b>About</b></a></li>
          <li><a href="#"><b>Contact us</b></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3><b>Contact Address:</b></h3>
        <p><b>Hilite Apartment, 2nd Floor Pattambi road, Cherupulaseri 673452</b></p>
        <p><b>Mail: Codeedextechnologies@gmail.com</b></p>
        <p><b>Phone: +91 6282116218, +91 9846563425</b></p>
      </div>
    </footer>
  );
}

export default Footer;
