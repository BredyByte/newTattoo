import React from 'react';
import { FullPageTilt } from '../../components';

export const PreliminaryPage = () => {
  return (
    <div
      id="PreliminaryPage"
      style={{
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'black',
        position: 'relative',
        scrollSnapAlign: 'center',
      }}
    >
      <FullPageTilt />
    </div>
  );
};
