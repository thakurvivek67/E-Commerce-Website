import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const List = () => {
  const products = productsArr.map((item, index) => (
    <Col md={4} key={index}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>{products}</Row>
    </Container>
  );
};

export default List;
