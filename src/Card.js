import React from 'react';
import './Card.css';

const Card = ({ title, description, id, technologies, link }) => {
    return (
      <div className='card'>
        <h3>{title}</h3>
        <ul>
          {technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <p>{description}</p>
        <a href={link}>Visit</a>
      </div>
    )
  }

export default Card;