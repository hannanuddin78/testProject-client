import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoImg from "../../../image/logo.png";

const AdminHeader = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={logoImg} alt="" />
        </Col>
        <Col md={6}>
          <p>user name</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHeader;
