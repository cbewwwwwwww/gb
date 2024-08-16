import React from 'react';
import './App.css';

import HomePage from './homePage';
// import Admin from './adminPage/adminPage'
// import Event from './eventsAdmin'
import { Routes,Route } from 'react-router';
// import PrivateRoute from './AuthContext';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
  </Routes> 
  
  );
}

export default App;
