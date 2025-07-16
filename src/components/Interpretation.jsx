import React from 'react';

function Interpretation({ cards }) {
  // This is a very simple interpretation logic.
  // A more advanced implementation would require a more sophisticated algorithm.
  const getInterpretation = () => {
    if (cards.length === 0) {
      return '';
    }

    const hasPositiveCard = cards.some(card => card.meaning.includes('success') || card.meaning.includes('joy') || card.meaning.includes('love'));
    const hasNegativeCard = cards.some(card => card.meaning.includes('conflict') || card.meaning.includes('loss') || card.meaning.includes('failure'));

    if (hasPositiveCard && !hasNegativeCard) {
      return 'ภาพรวมของคำทำนายออกมาในทิศทางที่ดีมาก มีโอกาสที่จะประสบความสำเร็จและพบกับความสุข';
    }

    if (!hasPositiveCard && hasNegativeCard) {
      return 'ภาพรวมของคำทำนายค่อนข้างน่าเป็นห่วง อาจจะต้องเผชิญกับอุปสรรคและความท้าทาย ขอให้มีสติและรอบคอบในการตัดสินใจ';
    }

    return 'ภาพรวมของคำทำนายมีความผสมผสานกันระหว่างเรื่องดีและเรื่องร้าย มีทั้งโอกาสและความท้าทายรออยู่ข้างหน้า';
  };

  return (
    <div className="interpretation">
      <h2>ภาพรวมคำทำนาย</h2>
      <p>{getInterpretation()}</p>
    </div>
  );
}

export default Interpretation;
