import React from 'react';
import { PresentationPage } from '../../sections/';
import { MenuBar } from '../../components';

export const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MenuBar />
      <PresentationPage />
    </div>
  );
};
