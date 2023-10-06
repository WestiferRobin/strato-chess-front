// App.js
import React from 'react';
import './App.css';
// import useTest from './hooks/useTest';
import Chessboard from './components/board/Chessboard';


const App = () => {
  // const { opponentName, loading, error } = useTest();

  // const renderTitle = () => {
  //   if (loading) return <></>
  //   return  error ? (
  //     <p>Error: {error.message}</p>
  //   ) : <p>Opponent: {opponentName}</p>
  // }

  return (
    <div className="App">
      <h1>Strato Chess! {"Wes vs Alpha"}</h1>
      {/* {renderTitle()} */}
      <Chessboard />
    </div>
  );
}

export default App;
