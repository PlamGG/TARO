import React from 'react';
import { FaCalendarDay, FaCalendarAlt } from 'react-icons/fa';

function ReadingFrequency({ setReadingFrequency }) {
  return (
    <div className="reading-frequency">
      <h2>เลือกความถี่ในการดูดวง</h2>
      <button onClick={() => setReadingFrequency('daily')}>
        <FaCalendarDay /> รายวัน
      </button>
      <button onClick={() => setReadingFrequency('monthly')}>
        <FaCalendarAlt /> รายเดือน
      </button>
    </div>
  );
}

export default ReadingFrequency;
