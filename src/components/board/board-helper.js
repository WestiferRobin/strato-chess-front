import Rook from '../pieces/Rook'; // Import the Rook component (and other chess piece components)
import Knight from '../pieces/Knight'; // Import the Knight component
import Bishop from '../pieces/Bishop'; // Import the Bishop component
import Queen from '../pieces/Queen'; // Import the Queen component
import King from '../pieces/King'; // Import the King component
import Pawn from '../pieces/Pawn'; // Import the Pawn component

const allyPrimaryColor = 'cyan';
const allySecondaryColor = 'black';

const enemyPrimaryColor = 'red';
const enemySecondaryColor = 'black';

export const configureSquare = (piece, row, col) => {
  switch (piece) {
    case 'R':
      return <Rook key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'N':
      return <Knight key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'B':
      return <Bishop key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'Q':
      return <Queen key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'K':
      return <King key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'P':
      return <Pawn key={`${row}-${col}`} primaryColor={allyPrimaryColor} secondaryColor={allySecondaryColor} />;
    case 'r':
      return <Rook key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'n':
      return <Knight key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'b':
      return <Bishop key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'q':
      return <Queen key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'k':
      return <King key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    case 'p':
      return <Pawn key={`${row}-${col}`} primaryColor={enemyPrimaryColor} secondaryColor={enemySecondaryColor} />;
    default:
      return null;
  }
};