import React from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <NavDropdown title="Pomotion" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Promo Codes</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2"> Add Promo Codes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/orders" eventKey="link-1">
                orders
              </Nav.Link>
              <Nav.Link as={Link} to="/products" eventKey="link-2">
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
