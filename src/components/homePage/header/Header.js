import React, { useContext, useEffect } from "react";
import logo from "../../../image/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { UserContext } from "../../../App";

const Header = () => {
  const [cartLength, setCartLength] = useState({});

  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue] = useContext(UserContext);

  useEffect(() => {
    // const ac = new AbortController();
    fetch("https://aqueous-sierra-94219.herokuapp.com/cartLength", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      // signal: ac.signal,
    })
      .then((res) => res.json())
      .then((data) => setCartLength(data));
    // return () => ac.abort();
  }, [cartLength]);

  const handleSearch = (e) => {
    fetch(`https://aqueous-sierra-94219.herokuapp.com/searchProduct?search=${e.target.value}`)
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
              {cartLength.length > 0 ? (
                <Nav.Link href="/cartItem">Cart : {cartLength.length}</Nav.Link>
              ) : (
                <Nav.Link href="/cartItem">Cart</Nav.Link>
              )}
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
