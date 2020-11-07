import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllProducts from "./allProducts/AllProducts";

const AddProducts = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Link to="/addNewProduct">
            <Button variant="outline-primary">Add New Product</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <AllProducts />
      </Row>
    </Container>
  );
};

export default AddProducts;
