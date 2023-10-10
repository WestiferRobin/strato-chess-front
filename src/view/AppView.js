import React from 'react';
import './AppView.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import ClassicView from './ClassicView';
import { ClassicViewProvider } from '../providers/ClassicViewProvider';
import AppProvider from '../providers/AppProvider';

const AppView = () => {
  return <AppProvider>
    <Router> {/* Use BrowserRouter here */}
      <div className="AppView">
        <Routes>
          <Route path='/' element={<ClassicViewProvider><ClassicView /></ClassicViewProvider>} /> {/* Use path instead of exact */}
        </Routes>
      </div>
    </Router>
  </AppProvider>
}

export default AppView;