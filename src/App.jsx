import React from 'react';
import { Home } from './pages';
import { Preloader } from './sections/Preloader';

export const App = () => {
  return (
    <div
      className="App"
      style={{
        position: 'relative',
      }}
    >
      {/*<Preloader />*/}
      <Home />
    </div>
  );
};
