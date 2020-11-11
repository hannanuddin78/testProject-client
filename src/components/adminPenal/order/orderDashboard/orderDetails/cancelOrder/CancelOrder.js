import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHeader from "../../../../adminHeader/AdminHeader";
import SideBar from "../../../../sideBar/SideBar";
import Cancel from "./cancel/Cancel";

const CancelOrder = () => {
  const [cancelOrders, setCancelOrders] = useState([]);
  console.log(cancelOrders);

  useEffect(() => {
    const cancel = "Cancel";
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => {
        const setCancel = data.filter((setC) => setC.status.toString() === cancel);
        setCancelOrders(setCancel);
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
            <Row className="mt-5">
              <Col md={2}>
                <Link to="/orders">
                  <Button variant="warning">All</Button>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/pendingOrders">
                  <Button variant="warning">Pending</Button>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/confirmOrders">
                  <Button variant="warning">Confirmed</Button>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/cancelOrders">
                  <Button variant="warning">Canceled</Button>
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
                  {cancelOrders.map((allOrder, index) => (
                    <Cancel allOrders={allOrder} index={index} key={allOrder._id} />
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

export default CancelOrder;
