import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Products = ({ pd }) => {
  return (
    <Col md={3} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Img
            style={{ width: "200px", height: "250px" }}
            className="img-fluid"
            variant="top"
            src={`data:image/png;base64,${pd.image.img}`}
          />
          <Card.Title>{pd.pdName}</Card.Title>
          <Card.Text>
            <span className="float-left">BDT.{pd.pdPrice}</span>
            <span className="float-right">{pd.disPrice}% </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
