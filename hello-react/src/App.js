import React from 'react';
import './App.css';

function App() {
  const name = '리액트';

  return (
    <div>
      <div className="react">
        {name}
      </div>
      <h1>들여쓰기</h1>
      <h2>코드</h2>
      <p>입니다.</p>
    </div>
  );
}

export default App;
