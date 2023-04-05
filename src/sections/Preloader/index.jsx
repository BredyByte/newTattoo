import React from 'react';
import styles from './Preloader.module.scss';
import Lottie from 'lottie-react';
import PreloadGif from '../../assets/gif/PreloaderLottie.json';

export const Preloader = () => {
  return <div className={styles.root}>Loading...</div>;
};
