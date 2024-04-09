import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css"; //cùng cấp nên ./

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));      //để ra kết quả như board.js
  return (
    <div>
      <Board cells={board}></Board>
    </div>
  );
};

export default Game;
