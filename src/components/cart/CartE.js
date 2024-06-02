import React, { useContext } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Context from "../store/Context";

const CartE = (props) => {
  const { cart } = useContext(Context);

  const calculateTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <Modal show={props.show} onHide={props.onClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {cart.map((item) => (
              <Row key={item.id} className="align-items-center">
                <Col md={2}>
                  <img src={item.imageUrl} alt={item.title} style={{ maxWidth: "100px", maxHeight: "100px" }} />
                </Col>
                <Col md={3}>
                  <strong>{item.title}</strong>
                </Col>
                <Col md={3}>
                  <strong>${item.price}</strong>
                </Col>
                <Col md={2}>
                  <strong>{item.quantity}</strong>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <div>Total Amount: {calculateTotalAmount()}</div>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CartE;


