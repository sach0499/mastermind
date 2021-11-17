import React from "react";

function Peg({ color, isSelected, onSelectColor }) {
  return (
    <div
      className={`color-item ${isSelected ? "border-black" : ""}`}
      style={{ backgroundColor: color }} onClick={() => {onSelectColor(color)}}
    ></div>
  );
}

export default Peg;
