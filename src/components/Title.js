import React from "react";
import Button from 'react-bootstrap/Button';
import '../css/Title.css';

const Title = ({mewdCount}) => {
  return (
    <div className="title-container">
      <h1>my board</h1>
      <p>{mewdCount} mewds</p>
      <Button className="add-button" variant="outline-success" data-hover="ADD" data-idle="+"></Button>
    </div>
  )
}

export default Title;
