import React from 'react';
import { CombinedContFoot, NewFooter } from './sections';
import {} from './components';
import { PreliminaryPage, Home } from './pages';

export const App = () => {
  return (
    <div
      className="App"
      style={{
        position: 'relative',
      }}
    >
      <PreliminaryPage />
      <Home />
    </div>
  );
};
