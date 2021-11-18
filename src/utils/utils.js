import { BASE_COLORS } from "./constants";

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

const compareBlockColorWithMasterColor = (blockColor, masterColor) => {
  let exactMatch = 0;
  let halfMatch = 0;
  let noMatch = 0;

  return { exactMatch, halfMatch, noMatch };
};

export const findHintsState = (blockColor, masterColor) => {
  let matches = compareBlockColorWithMasterColor(blockColor, masterColor);

  let hintsState = [];

  hintsState.push(...Array(matches.exactMatch).fill("exact-match"));
  hintsState.push(...Array(matches.halfMatch).fill("half-match"));
  hintsState.push(...Array(matches.noMatch).fill("no-match"));

  return hintsState;
};

export const findPlayerWonGame = (hintsState) => {
  return hintsState.reduce((prevRes, hint) => {
    return prevRes && hint === "exact-match";
  });
};

export const generateNDistinctColors = (N, inputColors) => {
  if (inputColors.length < N) return;

  let generatedColors = [];
  while (generatedColors.length < N) {
    const idx = Math.floor(Math.random() * inputColors.length);
    const color = inputColors[idx];

    if (!generatedColors.includes(color)) {
      generatedColors.push(color);
    }
  }

  return generatedColors;
};
