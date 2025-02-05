import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#introduction">Introduction</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
