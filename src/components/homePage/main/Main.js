import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import ActiveProducts from "./activeProducts/ActiveProducts";

const Main = () => {
  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue] = useContext(UserContext);

  useEffect(() => {
    const active = "Yes";
    fetch("http://localhost:5000/seeProducts/" + active)
      .then((res) => res.json())
      .then((data) => setSearchValue(data));
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {searchValue.map((activePd) => (
          <ActiveProducts activePd={activePd} key={activePd._id} />
        ))}
      </Row>
    </Container>
  );
};

export default Main;
