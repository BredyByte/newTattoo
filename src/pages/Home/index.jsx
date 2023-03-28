import React from 'react';
import {
  HomeSections,
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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isEndOfPage, setIsEndOfPage] = React.useState(false);
  const handleScrollTest = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrolledToEnd =
      Math.ceil(scrollTop + windowHeight) >= documentHeight;

    setIsEndOfPage(isScrolledToEnd);
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    scrollTop > 50 ? setIsScrolled(true) : setIsScrolled(false);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
      handleScrollTest();
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll();
        handleScrollTest();
      });
    };
  }, []);
  return (
    <>
      <PreliminaryPage />
      <MenuBar isScrolled={isScrolled} />
      <NavArrows isScrolled={isScrolled} isEndOfPage={isEndOfPage} />
      <CustomCursor />
      <HomeSections />
      <FixedFooter isEndOfPage={isEndOfPage} />
    </>
  );
};
