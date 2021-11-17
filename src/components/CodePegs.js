import React from "react";

import Peg from './Peg'

function CodePegs({colors, selectedColor, onSelectColor}) {
  return (
    <div className="color-selector">
      {colors.map((color) => (
        <Peg color={color} isSelected={color === selectedColor} onSelectColor={onSelectColor} key={color} />
      ))}
    </div>
  );
}

export default CodePegs;
