import React from 'react';
import {
  Footer,
  Contacts,
  CombinedContFoot,
  Services,
  PreliminaryPage,
} from './sections';
import {
  Slider,
  ToSectionBtn,
  TestTilt,
  PreviewPageBtn,
  TestFirstPresentationPage,
} from './components';

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
      <PreliminaryPage />
      <TestFirstPresentationPage />
      <Services />
      <CombinedContFoot />
    </div>
  );
};
