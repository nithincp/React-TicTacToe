import React from "react";

export default function Square({ value, onSquareClick, isWinningLine }) {
  const squareClassName = isWinningLine ? "square winning" : "square";
  return (
    <button className={squareClassName} onClick={onSquareClick}>
      {value}
    </button>
  );
}
