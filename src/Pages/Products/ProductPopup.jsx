import React from "react";
import { Button, Modal } from "react-bootstrap";

const ProductPopup = (props) => {
  const { modalProductData } = props;  
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="text-center">
        <img src={modalProductData} className="mx-auto" width="60%" alt="" />        
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button  onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductPopup;
