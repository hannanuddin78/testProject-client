import { Container } from "@material-ui/core";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const PromoDetails = ({ promoDet, index }) => {
  return (
    <Container fluid>
      <Row className="mb-5 mt-5 promoDetails">
        <Col md={12}>
          <Row className="promo-edit">
            <Col md={6}>
              {index + 1} <span className="ml-3">{promoDet.promoCode}</span>
            </Col>
            <Col md={6} className="promoBtn">
              <div className="float-right mr-5">
                <Button className="promo-btn " variant="warning">
                  Edit
                </Button>
                <Button className="promo-btn " variant="warning">
                  Edit
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="promoDtls">
            <Col md={15}></Col>
            <Col md={15}>
              <p>Usages : {promoDet.useTime}</p>
            </Col>
            <Col md={15}>
              <p>Discount Rate : {promoDet.discountRate}%</p>
            </Col>
            <Col md={15}></Col>
            <Col md={15}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoDetails;
