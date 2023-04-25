/** @format */

import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <NavbarBs className="shadow-sm bg-white mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store   
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About 
          </Nav.Link>
        </Nav>

        <Button
          className="rounded-circle position-relative bg-dark  "
          style={{ width: "50px", height: "50px" }}
        >
          <FaShoppingCart />

          <div
            className="position-absolute rounded-circle bg-danger d-flex justify-content-center align-items-center "
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              bottom: "0",
              right: "0",
              transform:'translate(25% , 25%)'
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
