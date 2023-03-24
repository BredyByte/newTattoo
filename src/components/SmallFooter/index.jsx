import React from 'react';
import grayBg from '../../assets/img/grayBg.webp';
import styles from './SmallFooter.module.scss';

export const SmallFooter = () => {
  return (
    <div
      className={styles.root}
      style={{
        background: 'black',
        // backgroundImage: `url(${grayBg})`,
        // backgroundPositionY: y,
        // backgroundSize: 'cover',
        transition: 'all 0.5s',
      }}
    >
      Thin footer
    </div>
  );
};
