import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Context from "../store/Context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const List = () => {
  const menuCtx = useContext(Context);

  const addToCartHandler = (item) => {
    menuCtx.addMedItems(item);
  };

  const products = productsArr.map((item, index) => (
    <Col md={3} key={index} className="mb-3">
      <Card>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCartHandler(item)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row className="mt-4">{products}</Row>
    </Container>
  );
};

export default List;
