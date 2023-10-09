import Pawn from './Pawn';
import Bishop from './Bishop';
import Knight from './Knight';
import Rook from './Rook';
import Queen from './Queen';
import King from './King';
import { MAX_POINTS } from '../../constants';

export const getGraveyard = (theme) => {
  const firstRow = [];
  const lastRow = [];
  for (let index = 0; index < 8; index++) {
    firstRow.push(<Pawn primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />);
    switch (index) {
      case 0:
      case 1:
        lastRow.push(<Bishop primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />);
        break;
      case 2:
      case 3:
        lastRow.push(<Knight primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />);
        break;
      case 4:
      case 5:
        lastRow.push(<Rook primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />);
        break;
      case 6:
        lastRow.push(<Queen primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />);
        break;
      case 7:
        lastRow.push(<King primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor} />);
        break;
      default:
        break;
    }
  }
  return {
    firstRow: firstRow,
    lastRow: lastRow,
    totalPoints: MAX_POINTS
  }
}