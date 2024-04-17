import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { calculateWinner } from "../../helpers";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const[state, setState] = useState({       //gộp về còn 1 biến, truyền vào object
    board: Array(9).fill(null),             
    xIsNext: true,
    name: 'Dolly'
  });
  const winner = calculateWinner(state.board);    //chỉnh lại biến truyền vào
  const handleClick = (index) => {
    const boardCopy = [...state.board];           //chỉnh lại biến truyền vào
    if (winner || boardCopy[index]) return; 
    boardCopy[index] = state.xIsNext ? "X" : "O"; //chỉnh lại biến truyền vào
    console.log(boardCopy[index]);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,                     //chỉnh lại biến truyền vào
    });
    console.log(state)
    // setBoard(boardCopy); 
    // setXIsNext((xIsNext) => !xIsNext); 
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}     {/*nếu có winner thì mới hiện*/}

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
