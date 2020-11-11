import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import Header from "../header/Header";
import CartItemsDetails from "./cartItemsDetails/CartItemsDetails";
import CheckOutPopUp from "./orderSummary/checkOutPopUp/CheckOutPopUp";
import OrderSummary from "./orderSummary/OrderSummary";

const CartPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCartItems")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, [cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ totalPrice: loggedInUser, status: "" }),
    })
      .then((response) => response.json())
      .then((data) => {
        openModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={9} className="cartItems">
            <Row>
              {cartItems.map((items) => (
                <CartItemsDetails items={items} key={items._id} />
              ))}
            </Row>
            <Row>
              <Col md={12} className="checkoutForm">
                <form onSubmit={handleSubmit}>
                  <input type="checkbox" required /> I have read and agree to the Terms and
                  Conditions
                  <input className="float-right" type="submit" name="checkout" value="CHECKOUT" />
                </form>
                <CheckOutPopUp modalIsOpen={modalIsOpen} closeModal={closeModal} />
              </Col>
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
