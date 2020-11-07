import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProducts from "../addProducts/AddProducts";
import AdminHeader from "../adminHeader/AdminHeader";
import SideBar from "../sideBar/SideBar";

const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <AddProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
