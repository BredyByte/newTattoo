import React from 'react';
import { Footer, Contacts } from '../';
import grayBg from '../../assets/img/grayBg.jpg';
import styles from './CombinedContFoot.module.scss';

export const CombinedContFoot = () => {
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${grayBg})`,
      }}
    >
      <Contacts />
      <Footer />
    </div>
  );
};
