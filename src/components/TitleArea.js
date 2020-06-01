import React from "react";
import AddMewdButton from "./AddMewdButton";
import "../css/TitleArea.css";

const TitleArea = (props) => {
  return (
    <>
      <div className="title-container">
        <h1>my board</h1>
        <p>{props.mewdCount} mewds</p>
        <AddMewdButton onAdd={props.onAdd} />
      </div>
    </>
  );
};

export default TitleArea;
