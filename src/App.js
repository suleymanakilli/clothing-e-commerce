import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/homePage';
import HatsPage from './pages/hatsPage/hatsPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/hats"
          element={<HatsPage animate={true} />}
        />

      </Routes>

    </div>
  );
}

export default App;
