import React from 'react';

import FullPageLayout from '../../shared-components/FullPageLayout';
import AboutCards from './components/AboutCards';

import { about } from '../../data/about.js';

import ExperiencesImg from '../../assets/Experiences.png';
import './About.scss';

function About() {
  const BLOCK = 'about'
  return (
    <FullPageLayout BLOCK={BLOCK}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="about__main">
        <div className="about__imageArea"> 
          <img width="300px" src={ExperiencesImg} alt="Experiences" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            {about.map((data) => <AboutCards data={data} />)}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed repellat reprehenderit tempora veniam at dicta amet rem consequatur odio dolorum nihil ea, quos consequuntur minus nobis, explicabo, doloribus in recusandae.
          </p>
        </div>
      </div>
    </FullPageLayout>
  )
}

export default About;