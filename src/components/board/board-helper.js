import Rook from '../pieces/Rook'; // Import the Rook component (and other chess piece components)
import Knight from '../pieces/Knight'; // Import the Knight component
import Bishop from '../pieces/Bishop'; // Import the Bishop component
import Queen from '../pieces/Queen'; // Import the Queen component
import King from '../pieces/King'; // Import the King component
import Pawn from '../pieces/Pawn'; // Import the Pawn component

export const configureSquare = (piece, row, col, theme) => {
  switch (piece.toUpperCase()) {
    case 'R':
      return <Rook key={`${row}-${col}`} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />;
    case 'N':
      return <Knight key={`${row}-${col}`} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />;
    case 'B':
      return <Bishop key={`${row}-${col}`} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />;
    case 'Q':
      return <Queen key={`${row}-${col}`} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />;
    case 'K':
      return <King key={`${row}-${col}`} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />;
    case 'P':
      return <Pawn key={`${row}-${col}`} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />;
    default:
      return null;
  }
};