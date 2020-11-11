import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminHeader from "../../adminHeader/AdminHeader";
import SideBar from "../../sideBar/SideBar";
import OrderDetails from "./orderDetails/OrderDetails";

const OrderDashboard = () => {
  return (
    <>
      <AdminHeader />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <OrderDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderDashboard;
