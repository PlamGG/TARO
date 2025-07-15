import React from 'react';
import Card from './Card';
import { draw_cards } from '../utils/divination';

function Reading() {
  const [cards, setCards] = React.useState([]);

  const handleDraw = () => {
    const drawn_cards = draw_cards(3);
    setCards(drawn_cards);
  };

  return (
    <div>
      <button onClick={handleDraw}>Draw Cards</button>
      <div className="reading">
        {cards.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Reading;
