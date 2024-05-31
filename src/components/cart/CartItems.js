import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap"; // Correct import for Button


const CartItems = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 2
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 3
    },
  ];

  const cartItems = productsArr.map((item, index) => (
    <Row key={index} className="align-items-center">
      <Col md={2}><Image src={item.imageUrl} thumbnail /></Col>
      <Col md={3}>{item.title}</Col>
      <Col md={3}>${item.price}</Col>
      <Col md={2}>{item.quantity}</Col>
      <Col md={2}>
        <Button variant="primary"> Remove</Button>
      </Col>
    </Row>
  ));

  return (
    <div>
      {cartItems}
    </div>
  );
};

export default CartItems;

