import React from "react";

const Cell = ({value, onClick, className}) => {   // bở props đi, object destructuring const { value, onClick } = props
  // const Cell = (props) => {  
  // console.log(props);       //object có value và onClick: {value: null, onClick: () => props.onClick(index)}
  // console.log (value, onClick);   //null () => props.onClick(index)

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};
export default Cell;
