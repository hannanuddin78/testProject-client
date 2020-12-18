import React, { useContext, useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { UserContext } from "../../../App";
import ActiveProducts from "./activeProducts/ActiveProducts";

const Main = () => {
  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue] = useContext(UserContext);

  useEffect(() => {
    const ac = new AbortController();
    const active = "Yes";
    fetch("https://aqueous-sierra-94219.herokuapp.com/seeProducts/" + active, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      signal: ac.signal,
    })
      .then((res) => res.json())
      .then((data) => setSearchValue(data));
    return () => ac.abort();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {searchValue.length > 0 ? (
          searchValue.map((activePd) => <ActiveProducts activePd={activePd} key={activePd._id} />)
        ) : (
          <Button className="m-auto" variant="primary" disabled>
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            <span className="ml-4">Loading Data...Plz Waiting Sometime</span>
          </Button>
        )}
      </Row>
    </Container>
  );
};

export default Main;
