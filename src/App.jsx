import React from 'react';
import { CombinedContFoot } from './sections';
import {} from './components';
import { PreliminaryPage, Home } from './pages';

export const App = () => {
  return (
    <div
      className="App"
      style={{
        // background: 'black',
        // minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/*<PreliminaryPage />*/}
      <Home />
      {/*<CombinedContFoot />*/}
    </div>
  );
};
