import React from 'react';
import './CardBack.css';

function CardBack({ onClick, isSelected }) {
  return (
    <div
      className={`card-back ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="card-back-inner"></div>
    </div>
  );
}

export default CardBack;
