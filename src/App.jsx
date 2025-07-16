import React, { Suspense, lazy } from 'react';
import './App.css';

const Reading = lazy(() => import('./components/Reading'));
const CardInfo = lazy(() => import('./components/CardInfo'));

function App() {
  const [page, setPage] = React.useState('reading');

  return (
    <>
      <div className="stars-bg"></div>
      <div className="App">
        <header className="App-header">
          <h1>เว็บดูดวงไพ่ทาโรต์</h1>
          <nav>
            <button onClick={() => setPage('reading')}>ดูดวง</button>
            <button onClick={() => setPage('card-info')}>ข้อมูลไพ่</button>
          </nav>
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            {page === 'reading' && <Reading />}
            {page === 'card-info' && <CardInfo />}
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
