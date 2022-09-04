import { useState, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Count from "./Count"
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navigate to="/count" replace/>} />
        <Route path="count" element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;
