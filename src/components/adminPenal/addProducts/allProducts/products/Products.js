import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Products = ({ pd }) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Img
            className="img-fluid"
            variant="top"
            src={`data:image/png;base64,${pd.image.img}`}
          />
          <Card.Title>{pd.pdName}</Card.Title>
          <Card.Text>
            <p className="float-left">BDT. {pd.pdPrice} </p>
            <p className="float-right">{pd.disPrice}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
