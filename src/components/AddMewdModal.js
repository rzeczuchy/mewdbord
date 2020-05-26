import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function addMewd(url) {
  console.log("Tried to add URL.");
}

const AddMewdModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Mewd
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formImageUrl">
            <Form.Control placeholder="Enter image URL" />
            <Form.Text className="text-muted">
              The above image will be added to the current board.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button onClick={props.onHide} variant="success">Add</Button>
      </Modal.Body>
    </Modal>
  );
}

export default AddMewdModal;
