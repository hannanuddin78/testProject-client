import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoImg from "../../../image/logo.png";

const AdminHeader = () => {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col md={6}>
          <img src={logoImg} alt="" />
        </Col>
        <Col md={6}>
          <p className="float-right">user name</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHeader;
