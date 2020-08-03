import React from "react";
import AddMewdButton from "./AddMewdButton";
import "../css/TitleArea.css";

const TitleArea = (props) => {
  return (
    <>
      <div className="title-container">
        <h1>{props.boardTitle}</h1>
        <p>{props.mewdCount} images</p>
        <AddMewdButton onAdd={props.onAdd} />
      </div>
    </>
  );
};

export default TitleArea;
