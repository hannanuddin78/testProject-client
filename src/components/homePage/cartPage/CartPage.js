import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import Header from "../header/Header";
import CartItemsDetails from "./cartItemsDetails/CartItemsDetails";
import CheckOutPopUp from "./orderSummary/checkOutPopUp/CheckOutPopUp";
import OrderSummary from "./orderSummary/OrderSummary";

const CartPage = () => {
  const [loggedInUser] = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // const ac = new AbortController();
    fetch("https://aqueous-sierra-94219.herokuapp.com/allCartItems", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      // signal: ac.signal,
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((error) => {
        console.error(error);
      });
    // return () => ac.abort();
  }, [cartItems]);

  const handleSubmit = (e) => {
    fetch("https://aqueous-sierra-94219.herokuapp.com/checkout", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ totalPrice: loggedInUser, status: "Pending" }),
    })
      .then((response) => response.json())
      .then((data) => {
        openModal();
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
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
                  <CheckOutPopUp modalIsOpen={modalIsOpen} closeModal={closeModal} />
                </form>
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
