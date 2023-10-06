import React, { useState } from 'react';
import Square from './Square';
import './Chessboard.css';
import useBoard from '../../hooks/useBoard';
import { configureSquare } from './board-helper';

const Chessboard = () => {
  const { board, isLoading } = useBoard();
  const [selectedSquare, setSelectedSquare] = useState(null);

  const renderBoard = () => {
    if (isLoading) return;
    const rows = board.length;
    const cols = board[0].length;

    // Create the chessboard
    const chessboard = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isBlack = (row + col) % 2 === 1;
        const piece = board[row][col];
        const position = `${row}-${col}`;

        const isSelected = selectedSquare === position;

        // Create a function to handle square click and toggle highlighting
        const handleSquareClick = () => {
          setSelectedSquare(position);
        };

        chessboard.push(
          <Square
            key={position}
            isBlack={isBlack}
            isSelected={isSelected}
            onClick={handleSquareClick}
          >
            {configureSquare(piece, row, col)}
          </Square>
        );
      }
    }

    return chessboard;
  }

  return (
    <div className="chessboard">
      {renderBoard()}
    </div>
  );
}

export default Chessboard;
