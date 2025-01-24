import React, { useState } from 'react';
import athletes from './data/athletes';
import DropdownFilter from './components/DropdownFilter';
import Carousel from './components/Carousel';
import './App.css';
import logo from './images/logo.png';

function App() {
  const [selectedPosition, setSelectedPosition] = useState("");

  // Get unique positions
  const positions = [...new Set(athletes.map((athlete) => athlete.position))];

  // Filter athletes by selected position
  const filteredAthletes = selectedPosition
  ? athletes.filter((athlete) => athlete.position === selectedPosition)
  : athletes;

  return (
    <div className="App">
      <img src={logo} alt="Company Logo" className="logo" />
      <h1>UC Davis Football Recruitment Page</h1>

      {/* Explanation Section */}
      <div className="explanation">
        <p>
          Welcome to the UC Davis Football recruitment page! Please find your position listed in the dropdown menu. Scroll through the different current UC Davis players!
        </p>
      </div>
      <DropdownFilter
        positions={positions}
        selectedPosition={selectedPosition}
        onPositionChange={setSelectedPosition}
      />
      <Carousel athletes={filteredAthletes} />
    </div>
  );
}

export default App;
