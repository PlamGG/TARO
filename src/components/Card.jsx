import React from 'react';

function Card({ card }) {
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <img src={card.image} alt={card.name} />
      <p>{card.meaning}</p>
    </div>
  );
}

export default Card;
