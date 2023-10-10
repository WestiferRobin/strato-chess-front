import { Box, Divider, Paper, Stack } from '@mui/material';
import { getGraveyard } from '../pieces/piece-helper';

const StatSheet = ({ owner }) => {
  const renderGraveyard = () => {
    const graveyard = getGraveyard(owner.theme);
    return (
      <Paper variant="elevation" elevation={24} sx={{ margin: '5%', height: "20vh", marginTop: '0', background: 'lightgrey' }}>
        <h3>Points: {graveyard.totalPoints}</h3>
        <Stack direction="row" sx={{flex: 1, justifyContent: "center"}}>
          {graveyard.firstRow}
        </Stack>
        <Stack direction="row" sx={{flex: 1, justifyContent: "center"}}>
          {graveyard.lastRow}
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
        <Box style={{ background: owner.theme.primaryColor, height: '45vh', overflowY: 'scroll' }}>
          <Stack>
            {moveHistory}
          </Stack>
        </Box>
      </Paper>
    );
  };

  return (
    <Paper variant="elevation" sx={{ width: '25%', height: '100%', backgroundColor: 'grey', display: 'flex', flexDirection: 'column' }} elevation={10}>
      <h2>{owner.name}: {owner.ranking}</h2>
      <Stack flex="1">
        {renderGraveyard()}
        {renderPlayedMoves()}
      </Stack>
    </Paper>
  );
};

export default StatSheet;
