import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

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

const CheckOutPopUp = ({ modalIsOpen, closeModal, cartItems }) => {
  const history = useHistory();

  const handleDeleteAll = () => {
    fetch("https://ancient-bayou-19368.herokuapp.com/deleteAll/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result === true) {
          history.push("/admin");
        }
      });
  };
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
          {/* <Link to="">
            <Button onClick={handleDeleteAll} variant="warning">
              Go To Admin Panel
            </Button>
          </Link> */}
          <Button onClick={handleDeleteAll} variant="warning">
            Go To Admin Panel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPopUp;
