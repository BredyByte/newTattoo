import React from 'react';
import {
  PresentationPage,
  Footer,
  CombinedContFoot,
  NewFooter,
} from '../../sections/';
import { MenuBar } from '../../components';

export const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MenuBar />
      <PresentationPage />
      <NewFooter />
    </div>
  );
};
