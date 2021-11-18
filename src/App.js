import React, { useState, useEffect } from "react";

import "./App.css";

import Modal from "./components/Modal";
import Rules from "./components/Rules";
import DecodingBoard from "./components/DecodingBoard";
import CodePegs from "./components/CodePegs";
import Footer from "./components/Footer";

import {
  generateBoardColors,
  generateHintsState,
  findHintsState,
  findPlayerWonGame,
  generateNDistinctColors,
} from "./utils/utils";


import { useLocalState } from "./utils/CustomHooks";

import {
  BASE_COLORS,
  FIRST_ROUND,
  NUM_BLOCKS,
  NUM_PEGS,
  DEFAULT_PEG_COLOR,
  DEFAULT_HINT_STATE,
  LAST_ROUND,
} from "./utils/constants";

const INITIAL_BOARD_COLORS = generateBoardColors(
  NUM_BLOCKS,
  NUM_PEGS,
  DEFAULT_PEG_COLOR
);
const INITIAL_HINTS_STATE = generateHintsState(
  NUM_BLOCKS,
  NUM_PEGS,
  DEFAULT_HINT_STATE
);

const INITIAL_MASTER_COLOR = generateNDistinctColors(4, BASE_COLORS);


function App() {
  const [masterColor, setMasterColor] = useLocalState("master-color", [
    ...INITIAL_MASTER_COLOR,
  ]);
  const [boardColors, setBoardColors] = useLocalState(
    "board-colors",
    INITIAL_BOARD_COLORS
  );
  const [boardHintsState, setBoardHintsState] = useLocalState(
    "board-hints-state",
    INITIAL_HINTS_STATE
  );
  const [currentRound, setCurrentRound] = useLocalState(
    "current-round",
    FIRST_ROUND
  );
  const [countPegsFilled, setCountPegsFilled] = useLocalState(
    "count-pegs-filled",
    0
  );
  const [selectedColor, setSelectedColor] = useLocalState(
    "selected-color",
    BASE_COLORS[0]
  );
  const [gameOver, setGameOver] = useLocalState("game-over", false);
  const [gameWon, setGameWon] = useLocalState("game-won", false);

  // // rehydrate state from local storage
  // useEffect(() => {
  //   const isStateSaved = JSON.parse(localStorage.getItem("is-state-saved"));
  //   if (isStateSaved) {
  //     setMasterColor(JSON.parse(localStorage.getItem("master-color")));
  //     setSelectedColor(JSON.parse(localStorage.getItem("selected-color")));
  //     setCurrentRound(JSON.parse(localStorage.getItem("current-round")));
  //     setBoardColors(JSON.parse(localStorage.getItem("board-colors")));
  //     setCountPegsFilled(JSON.parse(localStorage.getItem("count-pegs-filled")));
  //     setBoardHintsState(JSON.parse(localStorage.getItem("board-hints-state")));
  //     setGameOver(JSON.parse(localStorage.getItem("game-over")));
  //     setGameWon(JSON.parse(localStorage.getItem("game-won")));
  //   }
  // }, []);

  // // save state on local storage
  // useEffect(() => {
  //   localStorage.setItem("is-state-saved", JSON.stringify(true));

  //   localStorage.setItem("master-color", JSON.stringify(masterColor));
  //   localStorage.setItem("selected-color", JSON.stringify(selectedColor));
  //   localStorage.setItem("current-round", JSON.stringify(currentRound));
  //   localStorage.setItem("board-colors", JSON.stringify(boardColors));
  //   localStorage.setItem("count-pegs-filled", JSON.stringify(countPegsFilled));
  //   localStorage.setItem("board-hints-state", JSON.stringify(boardHintsState));
  //   localStorage.setItem("game-over", JSON.stringify(gameOver));
  //   localStorage.setItem("game-won", JSON.stringify(gameWon));
  // });

  const selectColorHandler = (color) => {
    setSelectedColor(color);
  };

  const colorPegHandler = (blockId, pegId) => {
    if (blockId !== currentRound) return;

    const prevColor = boardColors[blockId][pegId];

    if (prevColor === DEFAULT_PEG_COLOR)
      setCountPegsFilled(countPegsFilled + 1);

    boardColors[blockId][pegId] = selectedColor;
    setBoardColors([...boardColors]);
  };

  const submitButtonHandler = (blockId) => {
    if (blockId !== currentRound) return;

    const blockColor = boardColors[blockId];
    const blockHintsState = findHintsState(blockColor, masterColor);

    console.log(blockHintsState);

    boardHintsState[blockId] = blockHintsState;
    setBoardHintsState([...boardHintsState]);

    const isGameWon = findPlayerWonGame(blockHintsState);

    if (isGameWon) {
      setGameOver(true);
      setGameWon(true);
    } else if (currentRound === LAST_ROUND) {
      setGameOver(true);
      setGameWon(false);
    } else {
      setCurrentRound(currentRound + 1);
      setCountPegsFilled(0);
    }
  };

  const resetGameHandler = () => {
    setMasterColor([...generateNDistinctColors(4, BASE_COLORS)]);
    setCurrentRound(0);
    setBoardColors([
      ...generateBoardColors(NUM_BLOCKS, NUM_PEGS, DEFAULT_PEG_COLOR),
    ]);
    setBoardHintsState([
      ...generateHintsState(NUM_BLOCKS, NUM_PEGS, DEFAULT_HINT_STATE),
    ]);
    setCountPegsFilled(0);
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="container">
      <Modal
        gameOver={gameOver}
        gameWon={gameWon}
        onResetGame={resetGameHandler}
      />
      <img className="logo" src="/assets/images/Logo.png" alt="logo" />
      <Rules />
      <div className="main-section">
        <DecodingBoard
          numBlocks={NUM_BLOCKS}
          boardColors={boardColors}
          boardHintsState={boardHintsState}
          currentRound={currentRound}
          allPegsFilled={countPegsFilled === NUM_PEGS}
          onClickPeg={colorPegHandler}
          onClickSubmitButton={submitButtonHandler}
        />
        <CodePegs
          colors={BASE_COLORS}
          selectedColor={selectedColor}
          onSelectColor={selectColorHandler}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
