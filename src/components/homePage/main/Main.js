import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ActiveProducts from "./activeProducts/ActiveProducts";

const Main = () => {
  const [activePd, setActivePd] = useState([]);

  const active = "Yes";
  useEffect(() => {
    fetch("http://localhost:5000/seeProducts/" + active)
      .then((res) => res.json())
      .then((data) => setActivePd(data));
  }, [active]);

  return (
    <Container className="mt-5">
      <Row>
        {activePd.map((activePd) => (
          <ActiveProducts activePd={activePd} key={activePd._id} />
        ))}
      </Row>
    </Container>
  );
};

export default Main;
