import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const CheckOutPopUp = ({ modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center p-5">
          <p>Your Order Placed SuccessFully</p>
          <Link to="/admin">
            <Button variant="warning">Go To Admin Panel</Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPopUp;
