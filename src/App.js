import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/homePage';
import HatsPage from './pages/hatsPage/hatsPage';
import ShopPage from './pages/shopPage/shopPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route
          path="/hats"
          element={<HatsPage/>}
        />
        <Route
          path="/shop"
          element={<ShopPage/>}
        />

      </Routes>

    </div>
  );
}

export default App;
