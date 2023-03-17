import React from 'react';
import { FirstPresentationPage } from '../../sections/';
import { MenuBar } from '../../components';

export const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MenuBar />
      <FirstPresentationPage />
    </div>
  );
};
