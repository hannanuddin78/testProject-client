import React, { useContext, useState } from "react";
import { UserContext } from "../../../../App";

const OrderSummary = ({ cartItems }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [promoCode, setPromoCode] = useState();

  const [applyPromoCode, setApplyPromoCode] = useState([]);

  const handlePromoCode = (e) => {
    e.preventDefault();
    if (e.target.name === "code") {
      setPromoCode(e.target.value);
    }
  };

  const totalDis = cartItems.reduce((acc, item) => acc + parseInt(item.disPrice), 0);

  const allTotalPrice = cartItems.reduce((total, prd) => total + parseInt(prd.pdPrice), 0);

  const disPrice = Math.round((allTotalPrice * totalDis) / 100);

  let subTotal;
  subTotal = allTotalPrice - disPrice;

  let ShpCharge = cartItems.reduce((total, prd) => total + parseInt(prd.shpPrice), 0);

  const allPrice = subTotal + ShpCharge;

  const handleSubmitCode = (e) => {
    e.preventDefault();
    console.log(promoCode);
    fetch("https://enigmatic-badlands-36963.herokuapp.com/applyPromoCode")
      .then((res) => res.json())
      .then((data) => {
        const aplCode = data.find((dt) => dt.promoCode.toString() === promoCode);
        console.log(aplCode);
        if (aplCode) {
          const promoCodeDis = Math.round((subTotal * aplCode.discountRate) / 100);
          const subTotal2 = subTotal - promoCodeDis;
          const promoAllSubTotal = subTotal2 + ShpCharge;
          const promoApply = { ...applyPromoCode, subTotal2, promoAllSubTotal };
          setApplyPromoCode(promoApply);
        }
      });
  };

  setLoggedInUser(allPrice);
  return (
    <div className="orderSummary">
      <div className="orderSummeryText text-center">
        <p>Order Summary</p>
      </div>
      <div className="orderSummaryDetails">
        <div className="d-flex osVlu">
          <p>Items ordered :</p>
          <p>{cartItems.length}</p>
        </div>
        <div className="d-flex osVlu">
          <p>Subtotal ({cartItems.length} items) :</p>
          {applyPromoCode.subTotal2 ? <p>{applyPromoCode.subTotal2}</p> : <p>{subTotal}</p>}
        </div>
        <div className="d-flex osVlu">
          <p>Discount :</p>
          <p>0</p>
        </div>
        <div className="d-flex osVlu">
          <p>Shipping Charge :</p>
          <p>{ShpCharge}</p>
        </div>
        <div className="d-flex osVlu">
          <p>Wallet Debit :</p>
          <p>0</p>
        </div>
      </div>
      <div className="applyCoupon">
        <form onSubmit={handleSubmitCode}>
          <input type="text" name="code" onChange={handlePromoCode} placeholder="Type Your Code" />
          <input type="submit" value="Apply" />
        </form>
      </div>
      <div className="d-flex osVlu totalPrice">
        <p>Total Payable :</p>
        {applyPromoCode.promoAllSubTotal ? (
          <p>{applyPromoCode.promoAllSubTotal}</p>
        ) : (
          <p>{allPrice}</p>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
