import React from "react";
import Container from 'react-bootstrap/Container';
import '../css/Title.css';

const Title = ({mewdCount}) => {
  return (
    <div className="title-container">
      <h1>my board</h1>
      <p>added {mewdCount} mewds</p>
    </div>
  )
}

export default Title;
