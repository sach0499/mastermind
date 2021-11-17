import React from "react";

import Peg from "./Peg";

function DecodeBlock({ blockColor, selectedColor, onClickPeg }) {
  console.log(blockColor);

  return blockColor.map((color) => (
    <Peg className="peg-item" color={color} onClickPeg={onClickPeg} />
  ));
}

export default DecodeBlock;
