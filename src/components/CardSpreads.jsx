import React from 'react';
import { FaQuestion, FaRegImages, FaCross } from 'react-icons/fa';

function CardSpreads({ setCardSpread }) {
  return (
    <div className="card-spreads">
      <h2>เลือกรูปแบบการวางไพ่</h2>
      <button onClick={() => setCardSpread(1)}>
        <FaQuestion /> 1 ใบ (ใช่/ไม่ใช่)
      </button>
      <button onClick={() => setCardSpread(3)}>
        <FaRegImages /> 3 ใบ (อดีต-ปัจจุบัน-อนาคต)
      </button>
      <button onClick={() => setCardSpread(10)}>
        <FaCross /> Celtic Cross (10 ใบ)
      </button>
    </div>
  );
}

export default CardSpreads;
