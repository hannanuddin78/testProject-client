import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logoImg from "../../../image/logo.png";

const AdminHeader = () => {
  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue, login, setLogin] = useContext(
    UserContext
  );
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col md={6}>
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </Col>
        <Col md={6}>{login.email && <h4 className="float-right mt-3">{login.name}</h4>}</Col>
      </Row>
    </Container>
  );
};

export default AdminHeader;
