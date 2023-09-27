// Square.js
import React from 'react';
import './Square.css';

const Square = ({ isBlack }) => {
  const squareColor = isBlack ? 'black' : 'white';

  return <div className={`square ${squareColor}`}></div>;
}

export default Square;
