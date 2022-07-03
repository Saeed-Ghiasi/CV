import React from 'react';

import './ExperienceCard.scss';

function ExperienceCard({
  BLOCK,
  data: {
    jobTitle,
    explanation,
    at: { title, logo },
    date: { from, to },
    href,
  }
}) {
  return (
    <div className={`xp-card ${BLOCK}__xp-card`}>
      <div className="xp-card__main">
        <div>
          <h3>{jobTitle}</h3>
          {explanation && <h5>{explanation}</h5>}
        </div>
        <div className="xp-card__at-date">
          <a className="xp-card__at" href={href} target="_blank"> 
            <img width="30px" src={logo} alt={title} />
            <span>{title}</span>
          </a>
          <div className="xp-card__date">
            <span>{from}</span>
            <span> - </span>
            <span>{to}</span>
          </div>
        </div>
      </div>
      <h5 className="xp-card__details">Details</h5>
    </div>
  )
}

export default ExperienceCard;