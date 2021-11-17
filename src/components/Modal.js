import React from "react";

import './Modal.css'

function Modal({ gameOver, gameWon, onResetGame }) {

  if (!gameOver) return null;

  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <div className={`modal  ${gameWon ? 'modal-success': 'modal-failure'}`} >
        <div className="message">{gameWon ? 'Congratulations!': 'Game Over!'}</div>
        <button className="reset-button" onClick={onResetGame}>Play Again</button>
      </div>
    </div>
  );
}

export default Modal;