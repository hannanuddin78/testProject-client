import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PromoDetails from "./promoDetails/PromoDetails";

const PromoCodeDetails = () => {
  const [promoCodeDetails, setPromoCodeDetails] = useState([]);
  console.log(promoCodeDetails);
  useEffect(() => {
    fetch("https://enigmatic-badlands-36963.herokuapp.com/SeePromoCode")
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
