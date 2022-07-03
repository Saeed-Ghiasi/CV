import React from 'react';

import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Nav from './Nav';

import UnderConstruction from '../assets/UnderConstruction.png';
import './App.scss';

function App() {
  return (
    <main>
      <div className="under-construction">
        <img width="30px" src={UnderConstruction} alt="under construction" />
        Under Construction!
      </div>
      <Nav />
      <Introduction />
      <About />
      <Experiences />
      <Skills />
    </main>
  );
}

export default App;
