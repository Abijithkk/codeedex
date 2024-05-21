import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'

function HeadNav() {
  return (
    <Navbar expand="lg" className='navlop' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '0.5rem 1rem' }}>
      <Container>
        <Link to={'/'}>
          <Navbar.Brand href="#home">
            <img style={{ height: "40px", width: "100px" }} src="https://i.postimg.cc/7L5WS7qQ/Screenshot-2024-05-06-125647-removebg-preview.png" alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-white" >  {/* flexGrow set to 0 for right alignment */}
            <Link to={'/'} style={{ textDecoration: "none", cursor: "pointer" }}>
              <Nav.Link href="#home" className='text-black'><b>Home</b></Nav.Link>
            </Link>
            <Link to={'/services'} style={{ textDecoration: "none" }}>
              <Nav.Link href="#link" className='text-black'><b>Services</b></Nav.Link>
            </Link>
            <Link to={'/portfolio'} style={{ textDecoration: "none" }}>
              <Nav.Link href="#link" className='text-black'><b>Portfolio</b></Nav.Link>
            </Link>
            <Link to={'/about'} style={{ textDecoration: "none" }}>
              <Nav.Link href="#link" className='text-black'><b>About</b></Nav.Link>
            </Link>
            <Link to={'/contactus'} style={{ textDecoration: "none" }}>
              <Nav.Link href="#link" className='text-black'><b>Contact Us</b></Nav.Link>

            </Link>       
               </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeadNav;
