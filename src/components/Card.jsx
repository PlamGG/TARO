import React from 'react';
import { getMeaning } from '../utils/divination';

function Card({ card, position, readingType }) {
  const meaning = getMeaning(card, readingType);

  return (
    <div className="card">
      {position && <h3>{position}</h3>}
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{meaning}</p>
    </div>
  );
}

export default Card;
