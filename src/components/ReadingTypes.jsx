import React from 'react';

function ReadingTypes({ setReadingType }) {
  return (
    <div className="reading-types">
      <h2>Select a Reading Type</h2>
      <button onClick={() => setReadingType('love')}>Love</button>
      <button onClick={() => setReadingType('work')}>Work</button>
      <button onClick={() => setReadingType('finance')}>Finance</button>
      <button onClick={() => setReadingType('health')}>Health</button>
    </div>
  );
}

export default ReadingTypes;
