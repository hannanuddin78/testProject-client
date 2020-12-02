import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
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
                  Pomotion
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link to="/promoCode">Promo Codes</Link>
                  <Link to="/addPromoCode" className="dropdown-item">
                    Add Promo Codes
                  </Link>
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
    </>
  );
};

export default SideBar;
