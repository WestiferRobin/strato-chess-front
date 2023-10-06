import React, { useState } from 'react';
import Square from './Square';
import './Chessboard.css';
import useBoard from '../../hooks/useBoard';
import { configureSquare } from './board-helper';

const Chessboard = () => {
  const { board, setBoard } = useBoard();
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [highlightedSquares, setHighlightedSquares] = useState([]);

  const handleSquareClick = (row, col) => {
    const position = `${row}-${col}`;

    if (!selectedSquare) {
      // No square is selected, highlight the clicked square if it contains a piece
      if (board[row][col] !== ' ') {
        setSelectedSquare(position);
        const validMoves = getValidMoves(row, col);
        setHighlightedSquares(validMoves);
      }
    } else {
      // A square is already selected, attempt to move the piece
      if (isMoveValid(board, selectedSquare, position)) {
        // Update the board with the new piece positions
        const updatedBoard = makeMove(board, selectedSquare, position);
        console.log(updatedBoard);
        setBoard(updatedBoard);
        // Clear selected square and highlighted squares
        setSelectedSquare(null);
        setHighlightedSquares([]);
        // Update the board state with the new positions
        // You can implement this part based on your state management approach
      } else {
        // Invalid move, deselect the square
        setSelectedSquare(null);
        setHighlightedSquares([]);
      }
    }
  };

  const getValidMoves = (row, col) => {
    // Implement logic to determine valid moves for the selected piece
    // You can use the `isMoveValid` function from your board-helper
    // to check if a move is valid and return an array of valid move positions.
    // Example:
    const validMoves = [];

    // Check if a move is valid and add it to the validMoves array:
    if (isMoveValid(board, selectedSquare, `${row}-${col}`)) {
      validMoves.push(`${row}-${col}`);
    }

    return validMoves;
  };

  const isMoveValid = (board, fromSquare, toSquare) => {
    // Implement logic to check if a move is valid
    // You can use this function to determine whether a piece can move
    // from the `fromSquare` to the `toSquare` on the given `board`.
    // Example:
    // Check if the move is within the board boundaries and follows the rules
    // of the specific chess piece being moved.
    // Return true if valid, false otherwise.
    return true;
  };

  const makeMove = (board, fromSquare, toSquare) => {
    // Implement logic to update the board with the new piece positions
    // based on the selected move.
    // Example:
    const updatedBoard = [...board];
    const [fromRow, fromCol] = fromSquare.split('-').map(Number);
    const [toRow, toCol] = toSquare.split('-').map(Number);
    const pieceToMove = updatedBoard[fromRow][fromCol];

    // Update the 'from' square
    updatedBoard[fromRow][fromCol] = ' ';
    // Update the 'to' square
    updatedBoard[toRow][toCol] = pieceToMove;

    return updatedBoard;
  };

  const renderBoard = () => {
    // if (isLoading) return;
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
        const isHighlighted = highlightedSquares.includes(position);

        chessboard.push(
          <Square
            key={position}
            isBlack={isBlack}
            isSelected={isSelected}
            isHighlighted={isHighlighted}
            onClick={() => handleSquareClick(row, col)}
          >
            {configureSquare(piece, row, col)}
          </Square>
        );
      }
    }

    return chessboard;
  };

  return (
    <div className="chessboard">
      {renderBoard()}
    </div>
  );
};

export default Chessboard;
