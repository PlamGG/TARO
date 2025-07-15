import React from 'react';
import Card from './Card';
import ReadingTypes from './ReadingTypes';
import ReadingFrequency from './ReadingFrequency';
import CardSpreads from './CardSpreads';
import { draw_cards } from '../utils/divination';

function Reading() {
  const [readingType, setReadingType] = React.useState(null);
  const [readingFrequency, setReadingFrequency] = React.useState(null);
  const [cardSpread, setCardSpread] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  const handleDraw = () => {
    if (cardSpread) {
      const drawn_cards = draw_cards(cardSpread);
      setCards(drawn_cards);
    }
  };

  const handleReset = () => {
    setReadingType(null);
    setReadingFrequency(null);
    setCardSpread(null);
    setCards([]);
  };

  if (!readingType) {
    return <ReadingTypes setReadingType={setReadingType} />;
  }

  if (!readingFrequency) {
    return <ReadingFrequency setReadingFrequency={setReadingFrequency} />;
  }

  if (!cardSpread) {
    return <CardSpreads setCardSpread={setCardSpread} />;
  }

  return (
    <div>
      <button onClick={handleDraw}>Draw Cards</button>
      <button onClick={handleReset}>Start Over</button>
      <div className="reading">
        {cards.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Reading;
