// import React, { useReducer, useState } from "react";
// import Board from "./Board";
// import "./GameStyles.css";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
// import { calculateWinner } from "../../helpers";

// const initialState = {
//   board: Array(9).fill(null),
//   xIsNext: true,
// };

// const gameReducer = (state, action) => {
//   //truyền vào hàm switch key - case value
//   //state = state ban đầu (board, xIsNext)
//   switch (
//     action.type //'CLICK', xem ở bên dưới, const action = { type: "CLICK", payload: {} };
//   ) {
//     case "CLICK":
//       console.log("it working"); //khi ấn vào ô bất kì sẽ hiện 'it working'
//     //     break;
//     //   default:
//     //     break;
//   }
//   return state;
// };
// const Game = () => {
//   // const [board, setBoard] = useState(Array(9).fill(null));
//   // const [xIsNext, setXIsNext] = useState(true);
//   //useReducer
//   const [state, dispatch] = useReducer(gameReducer, initialState);
//   // const action = { type: "CLICK", payload: {} }; //truyền type để tẹo dùng reducer function (switch case), payload là data sẽ truyền vào
//   // dispatch({ type: "CLICK" });
//   // const [state, setState] = useState({
//   //   //gộp về còn 1 biến, truyền vào object
//   //   board: Array(9).fill(null),
//   //   xIsNext: true,
//   //   name: "Dolly",
//   // });
//   const winner = calculateWinner(state.board); //chỉnh lại biến truyền vào
//   const handleClick = (index) => {
//     const boardCopy = [...state.board]; //chỉnh lại biến truyền vào
//     if (winner || boardCopy[index]) return;
//     dispatch({
//       type: "CLICK",
//       payload: {
//         index, //bản đầy đủ: index: index, nhưng giống nhau nên rút gọn
//       },
//     });
//     // boardCopy[index] = state.xIsNext ? "X" : "O"; //chỉnh lại biến truyền vào
//     // console.log(boardCopy[index]);
//     // setState({
//     //   ...state,
//     //   board: boardCopy,
//     //   xIsNext: !state.xIsNext, //chỉnh lại biến truyền vào
//     // });
//     // console.log(state);
//     // setBoard(boardCopy);
//     // setXIsNext((xIsNext) => !xIsNext);
//   };

//   const handleResetGame = () => {
//     // setBoard(Array(9).fill(null));
//     // setXIsNext(true);
//   };

//   return (
//     <div>
//       <Board cells={state.board} onClick={handleClick}></Board>
//       {winner && <div className="game-winner">Winner is {winner}</div>}{" "}
//       {/*nếu có winner thì mới hiện*/}
//       <button className="game-reset" onClick={handleResetGame}>
//         Reset game
//       </button>
//     </div>
//   );
// };

// export default Game;

import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { calculateWinner } from "../../helpers";


const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {	//tham chiếu onClick ở Board.js
    const boardCopy = [...board]; 
    if (winner || boardCopy[index]) return; 	//nếu có người chiến thắng/ ô đã ấn rồi thì k ấn nữa => reuturn
    boardCopy[index] = xIsNext ? "X" : "O"; 
    console.log(`index = ${index}`, boardCopy[index]);
    setBoard(boardCopy); 
    setXIsNext((xIsNext) => !xIsNext); 
  };


  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    // setXIsNext(true)                          	//set là x thì đầu game luôn là x
  };


  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}  	{/*nếu có winner thì mới hiện*/}


      <br />
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};


export default Game;
