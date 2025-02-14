import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';


function NavBar() {

  const navigate = useNavigate();

  const handleProductLinkClick = (sectionId) => {
    // to close the nav bar
    close();

    // Navigate to the Home page
    navigate('/');

    // After navigation, scroll to the products section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

  function close () {

    let myNav = document.querySelector(".myAutoNav")
    if (myNav.classList.contains("show")) {
      myNav.classList.remove("show")
    } else {
      
      myNav.classList.add("show")
    }

  }

  let cart = useSelector(state => state.cart)
  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary ">
      <Container className='mynav-bar' >
        <Link onClick={() => close()} to="/" className='navbar-brand'>HomeVibe</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='myAutoNav'>
          <Nav className="me-auto" >
            <a  onClick={() => handleProductLinkClick("products")} href='#products' className='nav-link'>PRODUCTS</a>
            <a onClick={() => handleProductLinkClick("about")} href='#about' className='nav-link'>ABOUT</a>
            <Link onClick={() => close()} to="/cart" className='nav-link'>CART - <span className='cart-length bg-danger'>{cart.length}</span></Link>
           
          </Nav>
            <Link onClick={() => close()} to="/login" className='btn btn-primary ms-auto'>Log in </Link>
            <Link onClick={() => close()} to="/sign" className='btn btn-primary ms-3'>Sign in </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar
