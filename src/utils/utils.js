export const generateBoardColors = (
  NUM_BLOCKS,
  NUM_PEGS,
  DEFAULT_PEG_COLOR
) => {
  let boardColors = [];
  for (let block = 1; block <= NUM_BLOCKS; block++) {
    let blockColor = [];
    for (let peg = 1; peg <= NUM_PEGS; peg++) {
      blockColor.push(DEFAULT_PEG_COLOR);
    }
    boardColors.push(blockColor);
  }

  return boardColors;
};

export const generateHintsState = (
  NUM_BLOCKS,
  NUM_PEGS,
  DEFAULT_HINT_STATE
) => {
  let boardHintsState = [];
  for (let block = 1; block <= NUM_BLOCKS; block++) {
    let blockHintsState = [];
    for (let peg = 1; peg <= NUM_PEGS; peg++) {
        blockHintsState.push(DEFAULT_HINT_STATE);
    }
    boardHintsState.push(blockHintsState);
  }

  return boardHintsState;
};
