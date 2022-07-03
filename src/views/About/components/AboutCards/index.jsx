import React from 'react';

import './AboutCards.scss';

function AboutCards({
  data : {
    title,
    icon,
    explanation,
  }
}) {
  return (
    <div className="about-card">
      <span>{icon}</span>
      <h3 className="about-card__title">{title}</h3>
      <small>{explanation}</small>
    </div>
  )
}

export default AboutCards;