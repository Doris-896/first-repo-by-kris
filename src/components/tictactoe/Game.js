import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css"; 
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {        //truyền vào index. Lý do: tham chiếu onClick ở Board.js
    const boardCopy = [...board];         //lý do: đang ở trong state. Kiến thức về mảng: by reference: khi thay đổi giá trị trong mảng => ảnh hưởng đến mảng gốc (setBoard) => để tránh ảnh hưởng, cần tạo ra 1 bản clone => sử dụng concat / spread comparator
    if (winner || boardCopy[index]) return;     //nếu có người chiến thắng/ ô đã ấn rồi thì k ấn nữa => reuturn 
    boardCopy[index] = xIsNext ? 'X' : 'O';                //Tại vị trí boardCopy[index], kiểm tra xem có phải x tiếp theo hay không
    setBoard(boardCopy);            //update lại để ra kq X hay O bên ngoài
    setXIsNext(!xIsNext)            //giá trị ngược lại vs trước đó, VD: ấn X rồi => ngược lại là O
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner ? `Winner is ${xIsNext ? 'X' : 'O'}`}
    </div>
  );
};

export default Game;
