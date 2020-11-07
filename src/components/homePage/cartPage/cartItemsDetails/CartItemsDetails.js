import React from "react";
import { Col, Row } from "react-bootstrap";

const CartItemsDetails = ({ items }) => {
  const totalPrice = parseInt(items.pdPrice) + parseInt(items.shpPrice);
  return (
    <>
      <Col md={12}>
        <Row>
          <Col md={3}>
            <img className="img-fluid" src={`data:image/png;base64,${items.image.img}`} alt="" />
          </Col>
          <Col md={3}>
            <Row>
              <Col>
                <p>{items.pdName}</p>
              </Col>
            </Row>
            <Row>
              <Col md={7}>
                <p>Color : {items.color}</p>
              </Col>
              <Col md={5}>
                <p>Size : {items.size}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Product Price : BDT{items.pdPrice}</p>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col>
                <p>Shipping Method : {items.color}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Shipping Charge : BDT{items.shpPrice}</p>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col md={10}>
                <p>Total Price : {totalPrice}</p>
              </Col>
              <Col md={2}>
                <p>delete</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CartItemsDetails;
