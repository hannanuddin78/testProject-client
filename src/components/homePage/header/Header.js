import React, { useEffect } from "react";
import logo from "../../../image/logo.png";
import { Container, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [cartLength, setCartLength] = useState([]);
  console.log(cartLength);
  useEffect(() => {
    fetch("http://localhost:5000/cartLength")
      .then((res) => res.json())
      .then((data) => setCartLength(data));
  }, []);
  return (
    <div className="header-container">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Form>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
              <Nav.Link href="#home">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>
              <Nav.Link href="/cartItem">Cart : {cartLength.length}</Nav.Link>
              <Nav.Link href="/admin">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
