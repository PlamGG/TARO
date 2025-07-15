import React from 'react';

function CardSpreads({ setCardSpread }) {
  return (
    <div className="card-spreads">
      <h2>Select a Card Spread</h2>
      <button onClick={() => setCardSpread(1)}>1 Card (Yes/No)</button>
      <button onClick={() => setCardSpread(3)}>3 Cards (Past-Present-Future)</button>
      <button onClick={() => setCardSpread(10)}>Celtic Cross (10 Cards)</button>
    </div>
  );
}

export default CardSpreads;
