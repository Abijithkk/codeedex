import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {

  const phoneNumber = '+91 97785 64277'; // Replace with your phone number

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div>
      <footer class="footer-distributed">

        <div class="footer-left">

          <h3><img style={{ width: "200px", height: "80px" }} src="https://i.postimg.cc/7L5WS7qQ/Screenshot-2024-05-06-125647-removebg-preview.png" alt="" /></h3>

          <p class="footer-links">
            <Link to={'/'}>
              <a href="#" class="link-1">Home</a>
            </Link>
            <Link to={'/services'}> <a href="#">Services</a></Link>

            <Link to={'/portfolio'}> <a href="#">Projects</a></Link>

            <Link to={'/about'}> <a href="#">About</a></Link>

            <Link to={'/contactus'}><a href="#">Contact</a></Link>
          </p>

          <p class="footer-company-name">Codeedex Technologies © 2024</p>
        </div>

        <div class="footer-center">

          <div>
            <i class="fa fa-map-marker text-white"></i>
            <Link to={'https://maps.app.goo.gl/5QNuUmBeka47bB886'}><p> Cherppulasheri <br /> Palakkad, Kerala</p></Link>
          </div>

          <div>
            <i class="fa fa-phone text-white"></i>
            <Link onClick={handleClick}><p>+91 97785 64277</p></Link>
          </div>

          <div>
            <i class="fa fa-envelope text-white"></i>
            <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@codeedextechnologies.com" target="_blank">info@codeedextechnologies.com</a></p>
            </div>

        </div>

        <div class="footer-right ">

          <p class="footer-company-about">
            <span>About the company</span>
            Unlocking the digital realm with excellence, Codeedex pioneers innovation and simplicity
          </p>

          <div class="footer-icons">

            <a href="https://www.facebook.com/codeedextechnologies?mibextid=LQQJ4d"><i class="fa-brands fa-facebook text-white"></i></a>
            <a href="https://www.instagram.com/codeedextechnologies/?hl=en"><i class="fa-brands fa-square-instagram text-white"></i></a>
            <a href="https://www.linkedin.com/company/codeedex-technologies/"><i class="fa-brands fa-linkedin text-white"></i></a>
            <a href="https://www.youtube.com/@CodeedexTechnologies/featured"><i class="fa-brands fa-youtube text-white"></i></a>

          </div>

        </div>

      </footer>
    </div>
  );
}
export default Footer;