import React from 'react';
import './Card.css';

const Card = ({ title, description, id, technologies, link }) => {
    return (
      <div className='card css-box-shadow'>
        <h3>{title}</h3>
        <ul>
          {technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <p>{description}</p>
        <a className='visit' href={link}>Visit</a>
      </div>
    )
  }

export default Card;