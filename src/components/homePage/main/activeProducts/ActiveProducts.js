import React from "react";
import { Card, Col } from "react-bootstrap";

const ActiveProducts = ({ activePd }) => {
  const handleAddProduct = (activePd) => {
    const addKey = activePd;
    const addCart = { ...addKey, quantity: 1 };
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(addCart),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("your order submit successful");
        }
      });
  };

  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Img
            className="img-fluid"
            variant="top"
            src={`data:image/png;base64,${activePd.image.img}`}
          />
          <Card.Title>{activePd.pdName}</Card.Title>
          <Card.Text>
            <p className="float-left">BDT. {activePd.pdPrice} </p>
            <p className="float-right">{activePd.disPrice}</p>
          </Card.Text>
        </Card.Body>
        <button onClick={() => handleAddProduct(activePd)}>Add to Cart</button>
      </Card>
    </Col>
  );
};

export default ActiveProducts;
