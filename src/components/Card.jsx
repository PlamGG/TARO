import React from 'react';

function Card({ card, position }) {
  return (
    <div className="card">
      {position && <h3>{position}</h3>}
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.meaning}</p>
    </div>
  );
}

export default Card;
