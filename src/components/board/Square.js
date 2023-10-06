import React from 'react';
import './Square.css';

const Square = ({ isBlack, isSelected, children, onClick }) => {
  const squareClassName = isBlack ? 'square black' : 'square white';

  // Apply the "selected" class when the square is selected
  const squareClasses = `${squareClassName} ${isSelected ? 'selected' : ''}`;

  return (
    <div className={squareClasses} onClick={onClick}>
      {children}
    </div>
  );
}

export default Square;
