import React from 'react';
import Reading from './components/Reading';
import CardInfo from './components/CardInfo';
import './App.css';

function App() {
  const [page, setPage] = React.useState('reading');

  return (
    <div className="App">
      <header className="App-header">
        <h1>เว็บดูดวงไพ่ทาโรต์</h1>
        <nav>
          <button onClick={() => setPage('reading')}>ดูดวง</button>
          <button onClick={() => setPage('card-info')}>ข้อมูลไพ่</button>
        </nav>
      </header>
      <main>
        {page === 'reading' && <Reading />}
        {page === 'card-info' && <CardInfo />}
      </main>
    </div>
  );
}

export default App;
