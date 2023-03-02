import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchBarOverlay from "./SearchBarOverlay";
import "./SearchBarOverlay.css"

const Modall = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ backgroundColor: "#cdcde7", width: "54rem" }} className="modall">
          <SearchBarOverlay />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modall;
