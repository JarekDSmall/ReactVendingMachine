// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './vendingMachine';
import Snack1 from './snack1';
import Snack2 from './snack2';
import Snack3 from './snack3';
import Navigation from './Navigation';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation /> {/* Ensure Navigation is rendered */}
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack1" element={<Snack1 />} />
        <Route path="/snack2" element={<Snack2 />} />
        <Route path="/snack3" element={<Snack3 />} />
      </Routes>
    </Router>
  );
}

export default App;
