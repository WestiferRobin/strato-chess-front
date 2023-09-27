// Chessboard.js
import React from 'react';
import Square from './Square';
import './Chessboard.css';

const Chessboard = () => {
  // Create an 8x8 chessboard grid
  const board = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      board.push(<Square key={`${row}-${col}`} isBlack={isBlack} />);
    }
  }

  return <div className="chessboard">{board}</div>;
}

export default Chessboard;
