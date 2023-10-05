import React, { useState } from 'react';
import Square from './Square';
import Rook from '../pieces/Rook'; // Import the Rook component (and other chess piece components)
import Knight from '../pieces/Knight'; // Import the Knight component
import Bishop from '../pieces/Bishop'; // Import the Bishop component
import Queen from '../pieces/Queen'; // Import the Queen component
import King from '../pieces/King'; // Import the King component
import Pawn from '../pieces/Pawn'; // Import the Pawn component
import './Chessboard.css';

const Chessboard = () => {
  // Define the initial chessboard state with ASCII characters
  const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ];

  // Create state for the highlighted square (initially null)
  const [highlightedSquare, setHighlightedSquare] = useState(null);

  const renderSquare = (piece, row, col) => {
    switch (piece) {
      case 'r':
        return <Rook key={`${row}-${col}`} />;
      case 'n':
        return <Knight key={`${row}-${col}`} />;
      case 'b':
        return <Bishop key={`${row}-${col}`} />;
      case 'q':
        return <Queen key={`${row}-${col}`} />;
      case 'k':
        return <King key={`${row}-${col}`} />;
      case 'p':
        return <Pawn key={`${row}-${col}`} />;
      case 'R':
        return <Rook key={`${row}-${col}`} />;
      case 'N':
        return <Knight key={`${row}-${col}`} />;
      case 'B':
        return <Bishop key={`${row}-${col}`} />;
      case 'Q':
        return <Queen key={`${row}-${col}`} />;
      case 'K':
        return <King key={`${row}-${col}`} />;
      case 'P':
        return <Pawn key={`${row}-${col}`} />;
      default:
        return null;
    }
  };

  // Create the chessboard grid
  const rows = initialBoard.length;
  const cols = initialBoard[0].length;

  // Create the chessboard
  const chessboard = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isBlack = (row + col) % 2 === 1;
      const piece = initialBoard[row][col];
      const position = `${row}-${col}`;

      // Check if the square is the highlighted square
      const isHighlighted = highlightedSquare === position;

      // Create a function to handle square click and toggle highlighting
      const handleSquareClick = () => {
        setHighlightedSquare(position);
      };

      chessboard.push(
        <Square
          key={position}
          isBlack={isBlack}
          isHighlighted={isHighlighted}
          onClick={handleSquareClick}
        >
          {renderSquare(piece, row, col)}
        </Square>
      );
    }
  }

  return (
    <div className="chessboard">
      {chessboard}
    </div>
  );
}

export default Chessboard;
/*
import React from 'react';
import Square from './Square';
import Rook from '../pieces/Rook'; // Import the Rook component (and other chess piece components)
import Knight from '../pieces/Knight'; // Import the Knight component
import Bishop from '../pieces/Bishop'; // Import the Bishop component
import Queen from '../pieces/Queen'; // Import the Queen component
import King from '../pieces/King'; // Import the King component
import Pawn from '../pieces/Pawn'; // Import the Pawn component

const Chessboard = () => {
  const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ];

  const renderSquare = (piece, row, col) => {
    switch (piece) {
      case 'r':
        return <Rook key={`${row}-${col}`} />;
      case 'n':
        return <Knight key={`${row}-${col}`} />;
      case 'b':
        return <Bishop key={`${row}-${col}`} />;
      case 'q':
        return <Queen key={`${row}-${col}`} />;
      case 'k':
        return <King key={`${row}-${col}`} />;
      case 'p':
        return <Pawn key={`${row}-${col}`} />;
      case 'R':
        return <Rook key={`${row}-${col}`} />;
      case 'N':
        return <Knight key={`${row}-${col}`} />;
      case 'B':
        return <Bishop key={`${row}-${col}`} />;
      case 'Q':
        return <Queen key={`${row}-${col}`} />;
      case 'K':
        return <King key={`${row}-${col}`} />;
      case 'P':
        return <Pawn key={`${row}-${col}`} />;
      default:
        return null;
    }
  };

  const rows = board.length;
  const cols = board[0].length;
  const chessboard = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isBlack = (row + col) % 2 === 1;
      const piece = board[row][col];
      const square = (
        <Square key={`${row}-${col}`} isBlack={isBlack}>
          {renderSquare(piece, row, col)}
        </Square>
      );
      chessboard.push(square);
    }
  }

  return (
    <div className="chessboard">
      {chessboard}
    </div>
  );
}

export default Chessboard;

*/