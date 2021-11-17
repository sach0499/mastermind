import React from "react";

import './Peg.css'

function Peg({ color, isSelected, onClickPeg, className }) {
  return (
    <div
      className={`color-item ${className} ${isSelected ? "border-black" : ""}`}
      style={{ backgroundColor: color }} onClick={() => {onClickPeg(color)}}
    ></div>
  );
}

export default Peg;
