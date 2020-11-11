import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminHeader from "../adminHeader/AdminHeader";
import SideBar from "../sideBar/SideBar";
import PromoCodeDetails from "./promoCodeDetails/PromoCodeDetails";

const PromoCodeDeshboard = () => {
  return (
    <>
      <AdminHeader />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <PromoCodeDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PromoCodeDeshboard;
