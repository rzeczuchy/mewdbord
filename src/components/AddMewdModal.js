import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddMewdModal = (props) => {
  const [source, setSource] = useState({ url: "" });

  function validateURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setSource((prevURL) => {
      return { ...prevURL, [name]: value };
    });
  }

  function submitSource(event) {
    event.preventDefault();
    if (validateURL(source.url)) {
      props.onAdd(source.url);
    }
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="add-mewd-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="add-mewd-modal">Add mewd</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitSource}>
          <Form.Group controlId="formImageUrl">
            <Form.Control
              onChange={handleChange}
              name="url"
              value={source.url}
              placeholder="Enter image URL here"
            />
            <Form.Text className="text-muted">
              The above image will be added to the current board.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button onClick={submitSource} variant="success">
          Add
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default AddMewdModal;
