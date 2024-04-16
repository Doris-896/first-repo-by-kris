import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board]; 
    if (winner || boardCopy[index]) return; 
    boardCopy[index] = xIsNext ? "X" : "O"; 
    console.log(boardCopy[index]);
    setBoard(boardCopy); 
    setXIsNext((xIsNext) => !xIsNext); 
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
