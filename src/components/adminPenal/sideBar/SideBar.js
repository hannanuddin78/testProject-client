import React from "react";
import "./SideBar.css";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} className="">
            <Nav defaultActiveKey="/home" className="flex-column">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link to="/promoCode">
                    <a className="dropdown-item">Promo Codes</a>
                  </Link>
                  <a className="dropdown-item" href="/addPromoCode">
                    Add Promo Codes
                  </a>
                </div>
              </div>
              <Nav.Link as={Link} to="/orders" eventKey="link-1">
                orders
              </Nav.Link>
              <Nav.Link as={Link} to="/admin" eventKey="link-2">
                products
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;
