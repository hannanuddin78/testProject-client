import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PromoDetails from "./promoDetails/PromoDetails";

const PromoCodeDetails = () => {
  const [promoCodeDetails, setPromoCodeDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/SeePromoCode", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPromoCodeDetails(data));
  }, []);

  return (
    <div>
      <Link to="/addPromoCode">
        <Button variant="light">Add Promo Code</Button>
      </Link>
      {promoCodeDetails.map((promoDet, index) => (
        <PromoDetails promoDet={promoDet} index={index} key={promoDet._id} />
      ))}
    </div>
  );
};

export default PromoCodeDetails;
