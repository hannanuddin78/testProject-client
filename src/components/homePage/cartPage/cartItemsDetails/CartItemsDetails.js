import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

const CartItemsDetails = ({ items }) => {
  const handleCancel = (e, id) => {
    fetch("https://ancient-bayou-19368.herokuapp.com/delete/" + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  const totalPrice = parseInt(items.pdPrice) + parseInt(items.shpPrice);
  return (
    <>
      <Col md={12} className="cartItemDetails">
        <Row>
          <Col md={3}>
            <img className="img-fluid" src={items.image} alt="" />
          </Col>
          <Col md={3}>
            <Row>
              <Col>
                <p className="productName">{items.pdName}</p>
              </Col>
            </Row>
            <Row>
              <Col md={7} className="d-flex align-items-end">
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
            <Row className="pwhite">
              <Col>
                <p className="productName">{items.pdName}</p>
              </Col>
            </Row>
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
            <Row className="pwhite">
              <Col>
                <p className="productName">{items.pdName}</p>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <p>Total Price : {totalPrice}</p>
              </Col>
              <Col md={2} className="dltI">
                <FontAwesomeIcon onClick={(e) => handleCancel(e, items._id)} icon={faTrashAlt} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CartItemsDetails;
