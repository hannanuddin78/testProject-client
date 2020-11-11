import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Products from "./products/Products";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-badlands-36963.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
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
