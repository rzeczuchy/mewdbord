import React from "react";
import AddMewdButton from "./AddMewdButton";
import "../css/TitleArea.css";

const TitleArea = (props) => {
  return (
    <>
      <div className="title-container">
        <h1>my board</h1>
        <p>{props.mewdCount} mewds</p>
        <AddMewdButton />
      </div>
    </>
  );
};

export default TitleArea;
