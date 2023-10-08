// App.js
import React from 'react';
import './App.css';
// import useTest from './hooks/useTest';
import Chessboard from './components/board/Chessboard';
import { Stack } from '@mui/material';
import StatSheet from './components/sheet/StatSheet';

const playerName = "Wes"
const aiName = "Alpha"

const allyPrimaryColor = 'cyan';
const allySecondaryColor = 'black';

const enemyPrimaryColor = 'red';
const enemySecondaryColor = 'black';

const App = () => {
  // const { opponentName, loading, error } = useTest();

  const renderTitle = () => {
    return <h1 style={{color: "white", backgroundColor: "grey", height: "5vh"}}>Strato Chess! {`${playerName} vs ${aiName}`}</h1>
    // if (loading) return <></>
    // return  error ? (
    //   <p>Error: {error.message}</p>
    // ) : <p>Opponent: {opponentName}</p>
  }

  const renderSheet = (ownerName, primaryColor, secondaryColor) => {
    return <StatSheet ownerName={ownerName} primaryColor={primaryColor} secondaryColor={secondaryColor} />
  }

  return (
    <div className="App">
      {renderTitle()}
      <Stack direction="row" spacing={3} sx={{}}>
        {renderSheet(playerName, allyPrimaryColor, allySecondaryColor)}
        <Chessboard />
        {renderSheet(aiName, enemyPrimaryColor, enemySecondaryColor)}
      </Stack>
    </div>
  );
}

export default App;
