import React, { useState } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

const Navbar1 = (props) => {
  

  return (
    <Navbar variant ="dark" expand="lg" style={{ backgroundColor: "#0033ff"}}>
      <Navbar.Brand href="#home">
      <img
        src="/nometads.png"
        width="30%"
        height="30%"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand >
  <Navbar.Brand  href="/">CURSO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS / EAJ</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/calendario">calendario</Nav.Link>
      <NavDropdown title="documentos" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Formularios">Formularios</NavDropdown.Item>
        
        
        <NavDropdown.Divider />
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navbar1;
