import React from "react";
import { Card, Col } from "react-bootstrap";

const ActiveProducts = ({ activePd }) => {
  const handleAddProduct = (activePd) => {
    const addKey = activePd;
    console.log(addKey);
    const addCart = { ...addKey, quantity: 1 };
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(addCart),
    });
    // .then((res) => res.json())
    // .then((result) => {
    //   alert("your order submit successful");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <Col md={15}>
      <Card>
        <Card.Body>
          <Card.Img
            style={{ height: "200px" }}
            className="img-fluid"
            variant="top"
            src={`data:image/png;base64,${activePd.image.img}`}
          />
          <Card.Title>{activePd.pdName}</Card.Title>
          <Card.Text>
            <span className="float-left">BDT. {activePd.pdPrice} </span>
            <span className="float-right">{activePd.disPrice}%</span>
          </Card.Text>
          <div className="cardButton d-flex align-items-center justify-content-center">
            <button onClick={() => handleAddProduct(activePd)}>Add to Cart</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ActiveProducts;
