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
    return <Paper variant="elevation" elevation={24} sx={{ margin: '5%', marginTop: "0", height: "15vh", background: "lightgrey" }}>
      <h3 style={{marginBottom: 5, marginTop: 5}}>Points: {piecePoints}</h3>
      <Stack direction="row" sx={{margin: 5, marginTop: 0, marginBottom: 0}}>
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Pawn primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </Stack>
      <Stack direction="row" sx={{margin: 5, marginTop: 0}}>
        <Bishop primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Bishop primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Knight primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Knight primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Rook primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Rook primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <Queen primaryColor={primaryColor} secondaryColor={secondaryColor} />
        <King  primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </Stack>
    </Paper>
  }

  const renderPlayedMoves = () => {
    const moveHistory = []
    for (let index = 1; index <= 8; index += 1) {
      moveHistory.push(<>
        <div><h3>{`${index}: e8`}</h3></div>
        <Divider/>
      </>)
    }
    return <Paper variant="elevation" elevation={24} sx={{ margin: '5%', marginTop: "0", height: "60vh", background: "lightgrey" }}>
      <h4 style={{marginBottom: 5, marginTop: 5}}>Moves Played</h4>
      <Box style={{background: primaryColor, height: "90%", margin: "5%", overflowY: "scroll"}}>
      <Stack>
        {moveHistory}
      </Stack>
      </Box>
    </Paper>
  }

  return (
    <Paper variant="elevation" sx={{ width: '25vw', height: '88vh', backgroundColor: "grey" }} elevation={10}>
      <h2>{ownerName}</h2>
      <Stack>
        {renderGraveyard()}
        {renderPlayedMoves()}
      </Stack>
    </Paper>
  );
};

export default StatSheet;
