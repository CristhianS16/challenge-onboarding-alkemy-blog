import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      className="bg-default"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand>Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            <strong>Home</strong>
          </Nav.Link>
          <Nav.Link as={Link} to="/form-create">
            <strong>New post</strong>
          </Nav.Link>
          <Nav.Link as={Link} to="/form-edit">
            <strong>Edit post</strong>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
