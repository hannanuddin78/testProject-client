import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHeader from "../../../../adminHeader/AdminHeader";
import SideBar from "../../../../sideBar/SideBar";
import Pending from "./pending/Pending";

const PendingOrder = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    const pending = "Pending";
    fetch("http://localhost:4000/allOrders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const setConfirm = data.filter((setC) => setC.status === pending);
        setPendingOrders(setConfirm);
      });
  }, []);
  return (
    <>
      <AdminHeader />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <Row className="mb-5">
              <Col md={2}>
                <Link to="/orders">
                  <Button variant="warning" style={{ paddingBottom: "20px", paddingRight: "70px" }}>
                    All
                  </Button>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/pendingOrders">
                  <Button variant="primary" style={{ paddingBottom: "20px", paddingRight: "70px" }}>
                    Pending
                  </Button>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/confirmOrders">
                  <Button variant="success" style={{ paddingBottom: "20px", paddingRight: "70px" }}>
                    Confirmed
                  </Button>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/cancelOrders">
                  <Button variant="danger" style={{ paddingBottom: "20px", paddingRight: "70px" }}>
                    Canceled
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th className="text-secondary text-left" scope="col">
                        Sr No
                      </th>
                      <th className="text-secondary" scope="col">
                        order No
                      </th>
                      <th className="text-secondary" scope="col">
                        Item Price
                      </th>
                      <th className="text-secondary" scope="col">
                        Action
                      </th>
                      <th className="text-secondary" scope="col">
                        Status
                      </th>
                    </tr>
                  </thead>
                  {pendingOrders.map((allOrder, index) => (
                    <Pending allOrders={allOrder} index={index} key={allOrder._id} />
                  ))}
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PendingOrder;
