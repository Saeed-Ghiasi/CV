import React from 'react';

import FullPageLayout from '../../shared-components/FullPageLayout';
import ExperienceCard from '../../shared-components/ExperienceCard';

import { experiences } from '../../data/experiences.js';
import './Experiences.scss';

function Experiences() {
  const BLOCK = 'experiences'
  return (
    <FullPageLayout BLOCK={BLOCK}>
      <h5>What I Did</h5>
      <h2>Experiences</h2>
      <div className="experiences__cards">
        {experiences.map((data) => <ExperienceCard BLOCK={BLOCK} data={data} />)}
      </div>
    </FullPageLayout>
  )
}

export default Experiences;