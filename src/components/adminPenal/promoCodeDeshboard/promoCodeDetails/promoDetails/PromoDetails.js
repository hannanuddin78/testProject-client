import { Container } from "@material-ui/core";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PromoDetails = ({ promoDet, index }) => {
  return (
    <Container>
      <Row className="mb-5 mt-4 promoDetails">
        <Col md={12}>
          <Row className="promo-edit">
            <Col md={6}>
              {index + 1} <span className="ml-3">{promoDet.promoCode}</span>
            </Col>
            <Col md={6} className="promoBtn">
              <div className="float-right mr-5">
                <Link to={"/updatePromoCode/" + promoDet._id}>
                  <Button className="promo-btn mr-3" variant="warning">
                    Edit
                  </Button>
                </Link>
                {promoDet.active.toString() === "Active" && (
                  <Button className="promo-btn" variant="outline-success">
                    {promoDet.active}
                  </Button>
                )}
                {promoDet.active.toString() === "Deactive" && (
                  <Button className="promo-btn" variant="outline-danger">
                    {promoDet.active}
                  </Button>
                )}
              </div>
            </Col>
          </Row>
          <Row className="promoDtls">
            <Col md={12}>
              <div className="codeDetails d-flex">
                <div className="cd-col">
                  <p>Create At : {new Date(promoDet.createDate).toDateString("dd/MM/yyyy")}</p>
                </div>
                <div className="cd-col">
                  <p>Usages : {promoDet.useTime}</p>
                </div>
                <div className="cd-col">
                  <p>Discount Rate : {promoDet.discountRate}%</p>
                </div>
                <div className="cd-col">
                  <p>Start Date : {new Date(promoDet.startDate).toDateString("dd/MM/yyyy")}</p>
                </div>
                <div className="cd-col">
                  <p>End Date : {new Date(promoDet.endDate).toDateString("dd/MM/yyyy")}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoDetails;
