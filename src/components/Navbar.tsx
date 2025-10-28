import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const NavigationBar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => onNavigate('portfolio')}
              className={currentPage === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link 
              onClick={() => onNavigate('tienda')}
              className={currentPage === 'tienda' ? 'active' : ''}
            >
              Tienda Tech (Testing)
            </Nav.Link>
            <Nav.Link 
              onClick={() => onNavigate('guias')}
              className={currentPage === 'guias' ? 'active' : ''}
            >
              Guías
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;