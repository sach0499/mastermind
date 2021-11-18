import React from "react";

import Peg from "./Peg";

function DecodeBlock({ blockColor, selectedColor, onClickPeg, blockId }) {

  return blockColor.map((color, pegId) => (
    // <Peg className="peg-item" color={color} onClickPeg={onClickPeg} />
    <div className="peg-item" style={{backgroundColor: color}} onClick={() => {onClickPeg(blockId, pegId)}} />
  ));
}

export default DecodeBlock;
