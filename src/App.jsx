import React from 'react';
import { CombinedContFoot, NewFooter } from './sections';
import { CustomCursor } from './components';
import { motion } from 'framer-motion';
import { PreliminaryPage, Home } from './pages';

export const App = () => {
  return (
    <div
      className="App"
      style={{
        position: 'relative',
      }}
    >
      <Home />
    </div>
  );
};
