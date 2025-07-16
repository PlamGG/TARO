import React from 'react';

const majorArcana = [
  'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
  'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit',
  'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
  'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'
];

function getCardElement(cardName) {
  if (cardName.includes('Wands')) return 'Fire';
  if (cardName.includes('Cups')) return 'Water';
  if (cardName.includes('Swords')) return 'Air';
  if (cardName.includes('Pentacles')) return 'Earth';
  return 'Major';
}

function Interpretation({ cards, readingType }) {
  const getInterpretation = () => {
    if (cards.length === 0) {
      return '';
    }

    const numMajor = cards.filter(card => majorArcana.includes(card.name)).length;
    const elements = cards.map(card => getCardElement(card.name));
    const elementCounts = elements.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    let summary = '';

    if (numMajor > cards.length / 2) {
      summary += 'มีไพ่ Major Arcana จำนวนมากใน расклад นี้ ซึ่งบ่งบอกถึงเหตุการณ์สำคัญและบทเรียนชีวิตที่กำลังจะเกิดขึ้น ';
    }

    const dominantElement = Object.keys(elementCounts).reduce((a, b) => elementCounts[a] > elementCounts[b] ? a : b);

    switch (dominantElement) {
      case 'Fire':
        summary += 'พลังงานส่วนใหญ่มาจากธาตุไฟ ซึ่งเกี่ยวข้องกับความหลงใหล, พลังงาน, และการกระทำ ';
        break;
      case 'Water':
        summary += 'พลังงานส่วนใหญ่มาจากธาตุน้ำ ซึ่งเกี่ยวข้องกับอารมณ์, ความสัมพันธ์, และสัญชาตญาณ ';
        break;
      case 'Air':
        summary += 'พลังงานส่วนใหญ่มาจากธาตุลม ซึ่งเกี่ยวข้องกับความคิด, การสื่อสาร, และความท้าทาย ';
        break;
      case 'Earth':
        summary += 'พลังงานส่วนใหญ่มาจากธาตุดิน ซึ่งเกี่ยวข้องกับเรื่องวัตถุ, การเงิน, และความมั่นคง ';
        break;
    }

    // Add interpretation based on reading type
    switch (readingType) {
        case 'love':
            summary += 'ในด้านความรัก, คำทำนายนี้ชี้ให้เห็นถึง...';
            break;
        case 'work':
            summary += 'ในด้านการงาน, คำทำนายนี้ชี้ให้เห็นถึง...';
            break;
        case 'finance':
            summary += 'ในด้านการเงิน, คำทำนายนี้ชี้ให้เห็นถึง...';
            break;
        case 'health':
            summary += 'ในด้านสุขภาพ, คำทำนายนี้ชี้ให้เห็นถึง...';
            break;
    }

    // This is a placeholder for a more advanced interpretation logic
    summary += 'โดยรวมแล้ว, คำทำนายนี้เป็นการผสมผสานระหว่าง...';


    return summary;
  };

  return (
    <div className="interpretation">
      <h2>ภาพรวมคำทำนาย</h2>
      <p>{getInterpretation()}</p>
    </div>
  );
}

export default Interpretation;
