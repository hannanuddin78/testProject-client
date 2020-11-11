import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminHeader from "../../adminHeader/AdminHeader";
import SideBar from "../../sideBar/SideBar";
import AddPromoCodeForm from "./addPromoCodeForm/AddPromoCodeForm";

const AddPromoCodeNew = () => {
  return (
    <>
      <AdminHeader />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <AddPromoCodeForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddPromoCodeNew;
