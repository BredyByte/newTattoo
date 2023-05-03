import React from 'react';
import styles from './Footer.module.scss';
import { footerIconsData } from '../../assets/data';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <p>
        All images are Copyright 2022. Black Rituals Tattoo. All rights
        reserved.
      </p>
      <ul className={styles.iconsContainer}>
        {footerIconsData.map((i, index) => (
          <a
            className={styles.iconLink}
            key={index}
            target="_blank"
            rel="noreferrer"
            href={i.link}
          >
            {i.icon()}
          </a>
        ))}
      </ul>
    </footer>
  );
};
