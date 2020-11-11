import React, { useContext, useEffect } from "react";
import logo from "../../../image/logo.png";
import { Container, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { UserContext } from "../../../App";

const Header = () => {
  const [cartLength, setCartLength] = useState([]);

  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/cartLength")
      .then((res) => res.json())
      .then((data) => setCartLength(data));
  }, [cartLength]);

  const handleSearch = (e) => {
    fetch(`http://localhost:5000/searchProduct?search=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setSearchValue(data));
  };

  return (
    <div className="header-container ">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <input
                onChange={handleSearch}
                type="text"
                name="search"
                placeholder="Search"
                className="mr-sm-2"
              />
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
