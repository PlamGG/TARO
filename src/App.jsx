import React from 'react';
import Reading from './components/Reading';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>เว็บดูดวงไพ่ทาโรต์</h1>
      </header>
      <main>
        <Reading />
      </main>
    </div>
  );
}

export default App;
