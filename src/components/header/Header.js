import React from "react";
import { Nav, Navbar, Container, Row, Col, Button, Card } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar bg="info" expand="sm" className="px-0"> {/* Add px-0 class to remove horizontal padding */}
            <Container fluid> {/* Use fluid container to make it full width */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto fw-bold">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Store</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Button variant="light">Light</Button>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <Card bg="danger" className="m-0">
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

