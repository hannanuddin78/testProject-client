import React from "react";

const OrderSummary = ({ cartItems }) => {
  const totalDis = cartItems.reduce((acc, item) => acc + parseInt(item.disPrice), 0);

  const subTotal = cartItems.reduce((total, prd) => total + parseInt(prd.pdPrice), 0);

  const disPrice = Math.round((subTotal * totalDis) / 100);

  const ShpCharge = cartItems.reduce((total, prd) => total + parseInt(prd.shpPrice), 0);
  const allPrice = subTotal + ShpCharge;
  return (
    <div className="text-center">
      <p>Order Summary</p>
      <p>Items ordered: {cartItems.length}</p>
      <p>
        Subtotal({cartItems.length} items) : {disPrice}
      </p>
      <p>Discount : 0</p>
      <p>Shipping Charge : {ShpCharge}</p>
      <p>Wallet Debit : {totalDis}</p>
      <p>Total Payable : {allPrice}</p>
    </div>
  );
};

export default OrderSummary;
