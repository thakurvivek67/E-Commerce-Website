import React from "react";
import { Nav, Navbar, Container, Row, Col, Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Navbar bg="info" expand="sm" className="px-0">
            <Container fluid className="p-0">
              {" "}
              {/* Remove padding from Container */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fw-bold">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Store</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Button variant="light" onClick={props.onShowCart}>
                Show Cart
              </Button>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row
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
        <Col className="p-0">The Generics</Col>
      </Row>
    </Container>
  );
};

export default Header;
