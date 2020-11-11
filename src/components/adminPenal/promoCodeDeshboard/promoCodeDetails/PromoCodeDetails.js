import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PromoDetails from "./promoDetails/PromoDetails";

const PromoCodeDetails = () => {
  const [promoCodeDetails, setPromoCodeDetails] = useState([]);
  console.log(promoCodeDetails);
  useEffect(() => {
    fetch("http://localhost:5000/SeePromoCode")
      .then((res) => res.json())
      .then((data) => setPromoCodeDetails(data));
  }, []);
  return (
    <div>
      <Button variant="light">Add Promo Code</Button>
      {promoCodeDetails.map((promoDet, index) => (
        <PromoDetails promoDet={promoDet} index={index} key={promoDet._id} />
      ))}
    </div>
  );
};

export default PromoCodeDetails;
