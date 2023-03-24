import React from 'react';
import {
  PresentationPage,
  Footer,
  CombinedContFoot,
  NewFooter,
} from '../../sections/';
import { MenuBar, SmallFooter } from '../../components';
import grayBg from '../../assets/img/grayBg.webp';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <MenuBar />
      <PresentationPage />
      <SmallFooter />
      {/*<CombinedContFoot />*/}
    </>
  );
};
