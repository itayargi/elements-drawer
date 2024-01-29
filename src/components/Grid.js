// src/Grid.js
import React from "react";
import InputElement from "./InputElement";

const Grid = ({ elements }) => {
  return (
    <div className="grid">
      {elements.map((element, index) => (
        <InputElement key={index} element={element} />
      ))}
    </div>
  );
};

export default Grid;
