import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import AddMewdModal from "./AddMewdModal";

const AddMewdButton = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalShow(true)}
        className="add-button"
        variant="outline-success"
        data-hover="ADD"
        data-idle="+"
      />
      <AddMewdModal
        onAdd={props.onAdd}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default AddMewdButton;
