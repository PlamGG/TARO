import React from 'react';
import { FaHeart, FaBriefcase, FaPiggyBank, FaFirstAid } from 'react-icons/fa';

function ReadingTypes({ setReadingType }) {
  return (
    <div className="reading-types">
      <h2>เลือกประเภทการดูดวง</h2>
      <button onClick={() => setReadingType('love')}>
        <FaHeart /> ความรัก
      </button>
      <button onClick={() => setReadingType('work')}>
        <FaBriefcase /> การงาน
      </button>
      <button onClick={() => setReadingType('finance')}>
        <FaPiggyBank /> การเงิน
      </button>
      <button onClick={() => setReadingType('health')}>
        <FaFirstAid /> สุขภาพ
      </button>
    </div>
  );
}

export default ReadingTypes;
