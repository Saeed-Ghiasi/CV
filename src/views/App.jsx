import React from 'react';

import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';

import UnderConstruction from '../assets/UnderConstruction.png';
import './App.scss';

function App() {
  return (
    <main>
      <div className="under-construction">
        <img width="30px" src={UnderConstruction} alt="under construction" />
        Under Construction!
      </div>
      <Introduction />
      <Skills />
    </main>
  );
}

export default App;
