import React from "react";
import { Button } from "react-bootstrap";

const AllOrderDetails = ({ allOrd, index, statusChange, setStatusChange }) => {
  const handleStatus = (e, id) => {
    const newInfo = { ...statusChange };
    newInfo[e.target.name] = e.target.value;
    setStatusChange(newInfo);
    fetch(`http://localhost:4000/updateStatus/${allOrd._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newInfo }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          document.getElementById(allOrd._id).style.display = "none";
        }
      });
  };

  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>{allOrd._id}</td>
        <td>{allOrd.totalPrice}</td>
        <td>
          {allOrd.status === "Pending" ? (
            <div id={allOrd._id}>
              <Button
                onClick={(e) => handleStatus(e, allOrd._id)}
                className="mr-2"
                variant="warning"
                name="status"
                value="Confirm"
              >
                Confirm
              </Button>
              <Button
                onClick={(e) => handleStatus(e, allOrd._id)}
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
        {allOrd.status === "Pending" ? <td>pending</td> : <td>{allOrd.status}</td>}
      </tr>
    </tbody>
  );
};

export default AllOrderDetails;
