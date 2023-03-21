import React from 'react';
import {
  PresentationPage,
  Footer,
  CombinedContFoot,
  NewFooter,
} from '../../sections/';
import { MenuBar } from '../../components';
import grayBg from '../../assets/img/grayBg.webp';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div
      className={styles.root}
      style={{
        position: 'relative',
      }}
    >
      <MenuBar />
      <PresentationPage />
      <NewFooter />
      {/*<CombinedContFoot />*/}
    </div>
  );
};
