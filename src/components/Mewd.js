import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import MewdLightbox from "./MewdLightbox";
import "../css/Mewd.css";

const Mewd = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="mewd">
      <Image
        onClick={() => setModalShow(true)}
        className="mewd-image"
        src={props.imgSrc}
      />
      <MewdLightbox
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgSrc={props.imgSrc}
      />
    </div>
  );
};

export default Mewd;
