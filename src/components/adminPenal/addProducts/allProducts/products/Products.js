import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ pd }) => {
  return (
    <Col md={3} className="mb-4">
      <Link to={"/productEdit/" + pd._id}>
        <Card>
          <Card.Body>
            <Card.Img
              style={{ width: "200px", height: "250px" }}
              className="img-fluid"
              variant="top"
              src={pd.image}
            />
            <Card.Title>
              <span>{pd.pdName}</span>
            </Card.Title>
            <Card.Text>
              <span className="float-left">BDT.{pd.pdPrice}</span>
              <span className="float-right">{pd.disPrice}% </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Products;
