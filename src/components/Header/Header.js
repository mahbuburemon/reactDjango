import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" variant='dark'  className="bg-dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">BIFPCL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home"><i className="fas fa-shopping-cart"></i>Card</Nav.Link>
            <Nav.Link href="/login "><i className="fas fa-user"></i>Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;