import React from 'react';
import Card from './Card';
import ReadingTypes from './ReadingTypes';
import ReadingFrequency from './ReadingFrequency';
import CardSpreads from './CardSpreads';
import Interpretation from './Interpretation';
import { draw_cards } from '../utils/divination';

function getSpreadPositions(spread) {
  if (spread === 1) {
    return ['Yes/No'];
  }
  if (spread === 3) {
    return ['Past', 'Present', 'Future'];
  }
  if (spread === 10) {
    return [
      'The Heart of the Matter',
      'The Obstacle',
      'The Root Cause',
      'The Recent Past',
      'The Goal or Purpose',
      'The Near Future',
      'Your Attitude',
      'External Influences',
      'Hopes and Fears',
      'The Final Outcome',
    ];
  }
  return [];
}

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

  const spreadPositions = getSpreadPositions(cardSpread);

  return (
    <div>
      <button onClick={handleDraw}>สุ่มไพ่</button>
      <button onClick={handleReset}>เริ่มต้นใหม่</button>
      <button onClick={() => console.log('Reading saved:', { readingType, readingFrequency, cardSpread, cards })}>
        บันทึกผล
      </button>
      <button onClick={() => console.log('Sharing reading...')}>แชร์ผล</button>
      <div className="reading">
        {cards.map((card, index) => (
          <Card
            key={card.name}
            card={card}
            position={spreadPositions[index]}
          />
        ))}
      </div>
      {cards.length > 0 && <Interpretation cards={cards} />}
    </div>
  );
}

export default Reading;
