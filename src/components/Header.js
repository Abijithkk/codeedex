import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // Simulate loading delay
  };

  useEffect(() => {
    // Reset loading state on page load
    setLoading(false);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className='nav' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '0.5rem 1rem' }}>
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home" >
              <img onClick={() => handleNavigation('/')} className='headimg' style={{ height: "40px", width: "100px" }} src="https://i.postimg.cc/7L5WS7qQ/Screenshot-2024-05-06-125647-removebg-preview.png" alt="" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="text-white">
              <div onClick={() => handleNavigation('/')} style={{ textDecoration: "none", cursor: "pointer" }}>
                <Nav.Link className='text-white'><b>Home</b></Nav.Link>
              </div>
              <div onClick={() => handleNavigation('/services')} style={{ textDecoration: "none", cursor: "pointer" }}>
                <Nav.Link className='text-white'><b>Services</b></Nav.Link>
              </div>
              <div onClick={() => handleNavigation('/portfolio')} style={{ textDecoration: "none", cursor: "pointer" }}>
                <Nav.Link className='text-white'><b>Projects</b></Nav.Link>
              </div>
              <div onClick={() => handleNavigation('/about')} style={{ textDecoration: "none", cursor: "pointer" }}>
                <Nav.Link className='text-white'><b>About</b></Nav.Link>
              </div>
              <div onClick={() => handleNavigation('/contactus')} style={{ textDecoration: "none", cursor: "pointer" }}>
                <Nav.Link className='text-white'><b>Contact Us</b></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {loading && (
        <div className="loading-spinner">
          <div className="spinner-logo">
            <img src="https://i.postimg.cc/HLbyGcHY/spinlogo.png" alt="Loading" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
