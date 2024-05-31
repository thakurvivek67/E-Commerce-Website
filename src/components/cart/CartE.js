
import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import CartItems from "./CartItems";

const CartE = (props) => {
  return (
    <Container>
      <Modal show={props.show} onHide={props.onClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="align-items-center">
              <Col md={2}><strong>Image</strong></Col>
              <Col md={3}><strong>Title</strong></Col>
              <Col md={3}><strong>Price</strong></Col>
              <Col md={2}><strong>Quantity</strong></Col>
            </Row>
            <CartItems />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <div>Total Amount: $35.65</div>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CartE;
