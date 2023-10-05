import React from 'react';
import './Square.css';

const Square = ({ isBlack, isHighlighted, children, onClick }) => {
  const squareClassName = isBlack ? 'square black' : 'square white';

  // Apply the "highlighted" class when the square is highlighted
  const squareClasses = `${squareClassName} ${isHighlighted ? 'highlighted' : ''}`;

  return (
    <div className={squareClasses} onClick={onClick}>
      {children}
    </div>
  );
}

export default Square;
