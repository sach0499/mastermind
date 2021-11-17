import React from "react";

import Block from "./Block";

import './DecodingBoard.css'

function DecodingBoard({
  numBlocks,
  boardColors,
  boardHintsState,
  selectedColor,
  currentRound,
  onClickPeg,
  allPegsFilled,
  onClickSubmitButton,
}) {
  return (
    <div className="block-container">
      {[...Array(numBlocks)].map((el, blockId) => (
        <Block
          blockColor={boardColors[blockId]}
          blockHintsState={boardHintsState[blockId]}
          isBlockSelected={blockId === currentRound}
          isBlockProcessed={blockId < currentRound}
          selectedColor={selectedColor}
          allPegsFilled={allPegsFilled}
          onClickPeg={onClickPeg}
          onClickSubmitButton={onClickSubmitButton}
          key={blockId}
          blockId={blockId}
        />
      ))}
    </div>
  );
}

export default DecodingBoard;
