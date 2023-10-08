import React from 'react';
import './App.css';
import ClassicView from './components/view/ClassicView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter

const App = () => {
  return (
    <Router> {/* Use BrowserRouter here */}
      <div className="App">
        <Routes>
          <Route path='/' element={<ClassicView />} /> {/* Use path instead of exact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;