import React from "react";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState, useCallback } from "react";
import Context from "../store/Context";

const Header = (props) => {
  const menuCtx = useContext(Context);
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = useCallback(() => {
    const totalQuantity = menuCtx.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartQuantity(totalQuantity);
  }, [menuCtx.cart]);

  useEffect(() => {
    updateCartQuantity();
  }, [menuCtx.cart, updateCartQuantity]);

  const navLinkStyle = {
    color: "black", // Set color to black
    textDecoration: "none", // Remove underline
    marginRight: "20px", // Add space between NavLink elements
  };

  return (
    <Container fluid>
      <Navbar bg="info" expand="sm" className="px-0">
        <Container fluid className="p-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                style={navLinkStyle}
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                activeClassName="active"
                style={navLinkStyle}
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                style={navLinkStyle}
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center">
            <button className="btn btn-light" onClick={props.onShowCart}>
              Show Cart <Badge bg="secondary">{cartQuantity}</Badge>
              <span className="visually-hidden">unread messages</span>
            </button>
          </div>
        </Container>
      </Navbar>
      <div
        style={{
          backgroundColor: "grey",
          color: "white",
          fontSize: "35px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        The Generics
      </div>
    </Container>
  );
};

export default Header;
