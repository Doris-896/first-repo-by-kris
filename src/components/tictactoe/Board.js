import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helpers";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}    //props nhận từ Board, board nhận từ game
        ></Cell>
      ))}
    </div>
  );
};
export default Board;
