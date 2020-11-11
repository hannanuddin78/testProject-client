import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const AllOrderDetails = ({ allOrders, index }) => {
  const [statusChange, setStatusChange] = useState([]);
  console.log(statusChange.id);
  const handleStatus = (e, id) => {
    const newInfo = { ...statusChange };
    newInfo[e.target.name] = e.target.value;
    setStatusChange(newInfo);
    fetch(`http://localhost:5000/updateStatus/${allOrders._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newInfo }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          document.getElementById(allOrders._id).style.display = "none";
        }
      });
  };

  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>{allOrders._id}</td>
        <td>{allOrders.totalPrice}</td>
        <td>
          {allOrders.status === "" ? (
            <div id={allOrders._id}>
              <Button
                onClick={(e) => handleStatus(e, allOrders._id)}
                className="mr-2"
                variant="warning"
                name="status"
                value="Confirm"
              >
                Confirm
              </Button>
              <Button
                onClick={(e) => handleStatus(e, allOrders._id)}
                variant="danger"
                name="status"
                value="Cancel"
              >
                Cancel
              </Button>
            </div>
          ) : (
            ""
          )}
        </td>
        {allOrders.status === "" ? <td>pending</td> : <td>{allOrders.status}</td>}
      </tr>
    </tbody>
  );
};

export default AllOrderDetails;
