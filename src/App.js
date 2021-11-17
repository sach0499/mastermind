import React, { useState } from "react";

import "./App.css";

import Modal from "./components/Modal";
import Rules from "./components/Rules";
import DecodingBoard from "./components/DecodingBoard";
import CodePegs from "./components/CodePegs";
import Footer from "./components/Footer";

import { generateBoardColors, generateHintsState } from "./utils/utils";

import {
  BASE_COLORS,
  FIRST_ROUND,
  NUM_BLOCKS,
  NUM_PEGS,
  DEFAULT_PEG_COLOR,
  DEFAULT_HINT_STATE,
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

function App() {
  const [boardColors, setBoardColors] = useState(INITIAL_BOARD_COLORS);
  const [boardHintsState, setBoardHintsState] = useState(INITIAL_HINTS_STATE);
  const [currentRound, setCurrentRound] = useState(FIRST_ROUND);
  const [countPegsFilled, setPegsSlotsFilled] = useState(0);
  const [selectedColor, setSelectedColor] = useState(BASE_COLORS[0]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);


  const selectColorHandler = (color) => {
    setSelectedColor(color);
  };

  const resetGameHandler = () => {};

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
