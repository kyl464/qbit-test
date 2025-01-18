import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar className="bgNavbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo width={100} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            <Nav.Link as={Link} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Produk
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Tentang Kami
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
