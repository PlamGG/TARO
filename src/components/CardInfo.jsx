import React from 'react';
import { cards } from '../data/cards';

function CardInfo() {
  return (
    <div className="card-info">
      <h1>ข้อมูลไพ่ทาโรต์</h1>
      <div className="card-list">
        {cards.map((card) => (
          <div key={card.name} className="card-info-item">
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardInfo;
