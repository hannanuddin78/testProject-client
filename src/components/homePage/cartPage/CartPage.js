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
    fetch("http://localhost:5000/allCartItems", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleSubmit = (e) => {
    fetch("http://localhost:5000/checkout", {
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
                {/* {cartItems.map((item) => (
                  <CheckOutPopUp
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    cartItems={item}
                    key={item._id}
                  />
                ))} */}
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
