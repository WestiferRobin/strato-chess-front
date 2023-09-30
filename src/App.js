// App.js
import React from 'react';
import Chessboard from './components/Chessboard';
import './App.css';
import useTest from './hooks/useTest';

const App = () => {
  const { opponentName, loading, error } = useTest();

  const renderTitle = () => {
    if (loading) return <></>
    return  error ? (
      <p>Error: {error.message}</p>
    ) : <p>Opponent: {opponentName}</p>
  }

  return (
    <div className="App">
      <h1>Strato Chess!</h1>
      {renderTitle()}
      <Chessboard />
    </div>
  );
}

export default App;
