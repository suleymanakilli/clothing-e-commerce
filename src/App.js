import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/homePage';

function HatsPage(props) {
  console.log(props)
  return <h1>Hat Page</h1>
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>

    </div>
  );
}

export default App;
