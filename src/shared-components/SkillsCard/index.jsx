import React from 'react';

import { BsPatchCheckFill} from 'react-icons/bs';

import './SkillsCard.scss';

function SkillsCard({
  BLOCK,
  title,
  data,
}) {
  return (
    <div className={`skill-card ${BLOCK}__skill-card`}>
      <h3>{title}</h3>
      <div className="skill-card__items">
        {data.map(({ skill }, index) => ( index < 6 && <div className="skill-card__item">
          <span><BsPatchCheckFill /></span>
          <div>
            <h4>{skill}</h4>
            <small>experienced</small>
          </div>
        </div>))}
      </div>
      <div className='skill-card__expand'>Click to see full list</div>
    </div>
  )
}

export default SkillsCard;