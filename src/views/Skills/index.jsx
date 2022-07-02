import React from 'react';

import FullPageLayout from '../../shared-components/FullPageLayout';
import SkillsCard from '../../shared-components/SkillsCard';

import { softSkills, hardSkills } from '../../data/skills.js';
import './Skills.scss';

function Skills() {
  const BLOCK = 'skills'
  return (
    <FullPageLayout BLOCK={BLOCK}>
      <h5>What I Learned</h5>
      <h2>Skills</h2>
      <div className={`${BLOCK}__skills-cards`}>
        <SkillsCard BLOCK={BLOCK} title="Hard Skills" data={hardSkills} />
        <SkillsCard BLOCK={BLOCK} title="Soft Skills" data={softSkills} />
      </div>
    </FullPageLayout>
  )
}

export default Skills;