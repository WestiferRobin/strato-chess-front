import Rook from '../pieces/Rook'; // Import the Rook component (and other chess piece components)
import Knight from '../pieces/Knight'; // Import the Knight component
import Bishop from '../pieces/Bishop'; // Import the Bishop component
import Queen from '../pieces/Queen'; // Import the Queen component
import King from '../pieces/King'; // Import the King component
import Pawn from '../pieces/Pawn'; // Import the Pawn component

const allyPrimaryColor = 'red';
const allySecondaryColor = 'black';

const enemyPrimaryColor = 'blue';
const enemySecondaryColor = 'black';

export const configureSquare = (piece, row, col) => {
  switch (piece) {
    case 'r':
      return <Rook key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'n':
      return <Knight key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'b':
      return <Bishop key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'q':
      return <Queen key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'k':
      return <King key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'p':
      return <Pawn key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'R':
      return <Rook key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'N':
      return <Knight key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'B':
      return <Bishop key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'Q':
      return <Queen key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'K':
      return <King key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'P':
      return <Pawn key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    default:
      return null;
  }
};