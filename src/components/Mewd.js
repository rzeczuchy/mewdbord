import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import MewdLightbox from "./MewdLightbox";
import "../css/Mewd.css";

const Mewd = (props) => {
  const [modalShow, setModalShow] = useState(false);

  function deleteButtonClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="mewd">
      <Image
        onClick={() => setModalShow(true)}
        className="mewd-image"
        src={props.imgSrc}
      />
      <Button
        className="delete-button"
        variant="outline-dark"
        onClick={deleteButtonClick}
      >
        ✕
      </Button>
      <MewdLightbox
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgSrc={props.imgSrc}
      />
    </div>
  );
};

export default Mewd;
