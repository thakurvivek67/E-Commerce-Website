import React, { useContext, useEffect, useState, useCallback } from "react";
import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import Context from "../store/Context";

const Header = (props) => {
  const menuCtx = useContext(Context);
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = useCallback(() => {
    const totalQuantity = menuCtx.cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(totalQuantity);
  }, [menuCtx.cart]);

  useEffect(() => {
    updateCartQuantity();
  }, [menuCtx.cart, updateCartQuantity]);

  return (
    <Container fluid>
      <Navbar bg="info" expand="sm" className="px-0">
        <Container fluid className="p-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
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
