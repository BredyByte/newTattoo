import React from 'react';
import {
  PresentationPage,
  Footer,
  CombinedContFoot,
  NewFooter,
} from '../../sections/';
import {
  MenuBar,
  NavArrows,
  CustomCursor,
  FixedFooter,
} from '../../components';
import grayBg from '../../assets/img/grayBg.webp';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './Home.module.scss';
import { PreliminaryPage } from '../PreliminaryPage';

export const Home = () => {
  return (
    <>
      <PreliminaryPage />
      <MenuBar />
      <NavArrows />
      <PresentationPage />
      {/*<FixedFooter />*/}
      <CustomCursor />
      {/*<NewFooter />*/}
    </>
  );
};
