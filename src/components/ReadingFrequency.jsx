import React from 'react';

function ReadingFrequency({ setReadingFrequency }) {
  return (
    <div className="reading-frequency">
      <h2>Select a Reading Frequency</h2>
      <button onClick={() => setReadingFrequency('daily')}>Daily</button>
      <button onClick={() => setReadingFrequency('monthly')}>Monthly</button>
    </div>
  );
}

export default ReadingFrequency;
