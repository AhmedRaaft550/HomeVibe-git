import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


function NavBar() {
  let cart = useSelector(state => state.cart)
  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary ">
      <Container className='mynav-bar' >
        <Link to="/" className='navbar-brand'>HomeVibe</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to="/" className='nav-link'>PRODUCTS</Link>
            <Link to="/" className='nav-link'>ABOUT</Link>
            <Link to="/cart" className='nav-link'>CART - <span className='cart-length bg-danger'>{cart.length}</span></Link>
           
          </Nav>
            <Link to="/login" className='btn btn-primary ms-auto'>Log in </Link>
            <Link to="/sign" className='btn btn-primary ms-3'>Sign in </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar
