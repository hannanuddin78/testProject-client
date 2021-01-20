import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Products from "./products/Products";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // const ac = new AbortController();
    fetch("http://localhost:4000/allProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      // signal: ac.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
    // return () => ac.abort();
  }, []);

  return (
    <Col md={12}>
      <Row>
        {allProducts.length > 0 ? (
          allProducts.map((product) => <Products pd={product} key={product._id} />)
        ) : (
          <Button className="m-auto" variant="primary" disabled>
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            <span className="ml-4">Loading...Plz Waiting Sometime</span>
          </Button>
        )}
      </Row>
    </Col>
  );
};

export default AllProducts;
