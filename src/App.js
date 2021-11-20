import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/homePage';
import HatsPage from './pages/hatsPage/hatsPage';
import ShopPage from './pages/shopPage/shopPage';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header/>
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
