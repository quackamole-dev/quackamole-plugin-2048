import React from 'react';
import './App.scss';

import { animationDuration, gridGap } from './config';
import Header from './components/Header';
import Board from './components/Board';

const App: React.FC = () => {
  return (
    <div
      className="app"
      style={
        {
          '--animation-duration': `${animationDuration}ms`,
          '--grid-gap': gridGap,
        } as unknown as React.CSSProperties
      }
    >
      <div className="page">
        <Header />
        <Board />
        {/* <BoardSizePicker /> */}
      </div>
    </div>
  );
};

export default App;
