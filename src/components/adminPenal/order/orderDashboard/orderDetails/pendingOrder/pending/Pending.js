import React from "react";

const Pending = ({ allOrders, index }) => {
  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>{allOrders._id}</td>
        <td>{allOrders.totalPrice}</td>
        <td></td>
        {allOrders.status === "" && <td>pending</td>}
      </tr>
    </tbody>
  );
};

export default Pending;
