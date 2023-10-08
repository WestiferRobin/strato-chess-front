import { Box, Divider, Paper, Stack } from '@mui/material';
import Pawn from '../pieces/Pawn';
import Bishop from '../pieces/Bishop';
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';
import Queen from '../pieces/Queen';
import King from '../pieces/King';

const StatSheet = ({ ownerName, primaryColor, secondaryColor }) => {
  const piecePoints = 39;

  const renderGraveyard = () => {
    const firstRow = [];
    const lastRow = [];
    for (let index = 0; index < 8; index++) {
      firstRow.push(<Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />);
      switch (index) {
        case 0:
        case 1:
          lastRow.push(<Bishop primaryColor={primaryColor} secondaryColor={secondaryColor} />);
          break;
        case 2:
        case 3:
          lastRow.push(<Knight primaryColor={primaryColor} secondaryColor={secondaryColor} />);
          break;
        case 4:
        case 5:
          lastRow.push(<Rook primaryColor={primaryColor} secondaryColor={secondaryColor} />);
          break;
        case 6:
          lastRow.push(<Queen primaryColor={primaryColor} secondaryColor={secondaryColor} />);
          break;
        case 7:
          lastRow.push(<King primaryColor={primaryColor} secondaryColor={secondaryColor} />);
          break;
        default:
          break;
      }
    }

    return (
      <Paper variant="elevation" elevation={24} sx={{ margin: '5%', marginTop: '0', height: '10%', background: 'lightgrey', flex: '1'  }}>
        <h3>Points: {piecePoints}</h3>
        <Stack direction="row" sx={{flex: 1}}>
          {firstRow}
        </Stack>
        <Stack direction="row" sx={{flex: 1}}>
          {lastRow}
        </Stack>
      </Paper>
    );
  };

  const renderPlayedMoves = () => {
    const moveHistory = [];
    for (let index = 1; index <= 10; index += 1) {
      moveHistory.push(
        <>
          <div>
            <h3>{`${index}: e8`}</h3>
          </div>
          <Divider />
        </>
      );
    }
    return (
      <Paper variant="elevation" elevation={24} sx={{ margin: '5%', height: '100%', background: 'lightgrey', display: 'flex', flexDirection: 'column' }}>
        <h4>Moves Played</h4>
        <Box style={{ background: primaryColor, maxHeight: '40vh', flex: '1', overflowY: 'scroll' }}>
          <Stack>
            {moveHistory}
          </Stack>
        </Box>
      </Paper>
    );
  };

  return (
    <Paper variant="elevation" sx={{ width: '25%', height: '100%', backgroundColor: 'grey', display: 'flex', flexDirection: 'column' }} elevation={10}>
      <h2>{ownerName}</h2>
      <Stack flex="1">
        {renderGraveyard()}
        {renderPlayedMoves()}
      </Stack>
    </Paper>
  );
};

export default StatSheet;
