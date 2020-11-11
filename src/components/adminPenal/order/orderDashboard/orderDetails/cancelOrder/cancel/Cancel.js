import React from "react";

const Cancel = ({ allOrders, index }) => {
  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>{allOrders._id}</td>
        <td>{allOrders.totalPrice}</td>
        <td></td>
        <td>{allOrders.status}</td>
      </tr>
    </tbody>
  );
};

export default Cancel;
