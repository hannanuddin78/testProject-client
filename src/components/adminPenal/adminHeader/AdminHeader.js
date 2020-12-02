import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../../../image/logo.png";

const AdminHeader = () => {
  const userName = sessionStorage.getItem("name");
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col md={6}>
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </Col>
        <Col md={6}>
          {userName ? (
            <h4 className="float-right mt-3">{userName}</h4>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", float: "right" }}>
              Login
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHeader;
