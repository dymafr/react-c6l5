import React from 'react';
import Articles from './components/Articles';

function App() {
  return (
    <div className="d-flex flex-row justify-content align-items-center p-20">
      <Articles displayArticle={true} />
    </div>
  );
}

export default App;
