import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Products from "./products/Products";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  return (
    <Col md={12}>
      <Row>
        {allProducts.map((product) => (
          <Products pd={product} key={product._id} />
        ))}
      </Row>
    </Col>
  );
};

export default AllProducts;
