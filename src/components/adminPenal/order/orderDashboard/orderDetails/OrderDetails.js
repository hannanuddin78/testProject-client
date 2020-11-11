import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllOrderDetails from "./allOrderDetails/AllOrderDetails";

const OrderDetails = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  return (
    <Container fluid>
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
            {allOrders.map((allOrder, index) => (
              <AllOrderDetails allOrders={allOrder} index={index} key={allOrder._id} />
            ))}
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;
