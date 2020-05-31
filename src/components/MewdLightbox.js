import React from "react";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import "../css/MewdLightbox.css";

const MewdLightbox = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="add-mewd-modal"
      centered
      >
      <Modal.Header closeButton />
      <Modal.Body>
        <Image className="lightbox-image" src={props.imgSrc} />
      </Modal.Body>
    </Modal>
  )
}

export default MewdLightbox;
