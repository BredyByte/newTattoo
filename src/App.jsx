import React from 'react';
import {
  Footer,
  Contacts,
  CombinedContFoot,
  Services,
  PreliminaryPage,
} from './sections';
import { Slider, ToSectionBtn, TestTilt, PreviewPageBtn } from './components';

export const App = () => {
  return (
    <div
      className="App"
      style={{
        background: 'black',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <PreliminaryPage />
      <Services />
      <CombinedContFoot />
    </div>
  );
};
