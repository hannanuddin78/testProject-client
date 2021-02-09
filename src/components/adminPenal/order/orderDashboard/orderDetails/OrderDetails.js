import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllOrderDetails from "./allOrderDetails/AllOrderDetails";

const OrderDetails = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [statusChange, setStatusChange] = useState({});

  useEffect(() => {
    const abrotController = new AbortController();
    const signal = abrotController.signal;

    fetch(
      "https://e-com-project-test-server.herokuapp.com/allOrders",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      },
      { signal: signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
    return function cleanup() {
      abrotController.abort();
    };
  }, [statusChange]);

  return (
    <Container>
      <Row className="mb-4">
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
            {allOrders.map((allOrder, index) => (
              <AllOrderDetails
                allOrd={allOrder}
                index={index}
                key={allOrder._id}
                statusChange={statusChange}
                setStatusChange={setStatusChange}
              />
            ))}
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;
