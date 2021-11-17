import React from "react";

import { FaCheck } from "react-icons/fa";
import DecodeBlock from "./DecodeBlock";
import Hints from "./Hints";

function Block({
  blockColor,
  blockHintsState,
  isBlockSelected,
  isBlockProcessed,
  selectedColor,
  allPegsFilled,
  onClickPeg,
  onClickSubmitButton,
  blockId,
}) {
  return (
    <div
      className={`block-item ${isBlockSelected ? "border-dotted" : ""} ${
        isBlockProcessed ? "fade" : ""
      }`}
    >
      <DecodeBlock
        blockColor={blockColor}
        selectedColor={selectedColor}
        onClickPeg={onClickPeg}
      />
      <button
        className={`submit-button ${
          isBlockSelected && allPegsFilled ? "" : "hide-element"
        }`}
        onClick={() => {
          onClickSubmitButton(blockId);
        }}
      >
        <FaCheck />
      </button>
      <Hints blockHintsState={blockHintsState} />
    </div>
  );
}

export default Block;
