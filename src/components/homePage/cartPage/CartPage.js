import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../header/Header";
import CartItemsDetails from "./cartItemsDetails/CartItemsDetails";
import OrderSummary from "./orderSummary/OrderSummary";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  useEffect(() => {
    fetch("http://localhost:5000/allCartItems")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={9}>
            <Row>
              {cartItems.map((items) => (
                <CartItemsDetails items={items} key={items._id} />
              ))}
            </Row>
          </Col>
          <Col md={3}>
            <OrderSummary cartItems={cartItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
