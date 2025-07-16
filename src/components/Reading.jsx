import React from 'react';
import Card from './Card';
import CardBack from './CardBack';
import ReadingTypes from './ReadingTypes';
import ReadingFrequency from './ReadingFrequency';
import CardSpreads from './CardSpreads';
import Interpretation from './Interpretation';
import { draw_cards } from '../utils/divination';
import './Reading.css';

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
  const [selectedIndices, setSelectedIndices] = React.useState([]);
  const [drawnCards, setDrawnCards] = React.useState([]);
  const [revealed, setRevealed] = React.useState(false);

  const handleSelectCard = (index) => {
    if (selectedIndices.length < cardSpread && !selectedIndices.includes(index)) {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleConfirm = () => {
    const cards = draw_cards(cardSpread);
    setDrawnCards(cards);
    setRevealed(true);
  };

  const handleReset = () => {
    setReadingType(null);
    setReadingFrequency(null);
    setCardSpread(null);
    setSelectedIndices([]);
    setDrawnCards([]);
    setRevealed(false);
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

  if (!revealed) {
    return (
      <div className="card-selection">
        <h2>กรุณาเลือกไพ่ {cardSpread} ใบ</h2>
        <div className="card-spread">
          {Array.from({ length: 78 }).map((_, index) => (
            <CardBack
              key={index}
              onClick={() => handleSelectCard(index)}
              isSelected={selectedIndices.includes(index)}
            />
          ))}
        </div>
        {selectedIndices.length === cardSpread && (
          <button onClick={handleConfirm}>ยืนยัน</button>
        )}
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleReset}>เริ่มต้นใหม่</button>
      <div className="reading">
        {drawnCards.map((card, index) => (
          <Card
            key={card.name}
            card={card}
            position={spreadPositions[index]}
          />
        ))}
      </div>
      {drawnCards.length > 0 && <Interpretation cards={drawnCards} />}
    </div>
  );
}

export default Reading;
