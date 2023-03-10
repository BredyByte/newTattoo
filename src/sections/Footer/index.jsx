import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as TextLogo } from '../../assets/icons/LogoText.svg';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.contentContainer} container`}>
        <div className={styles.imgContainer}>
          <TextLogo className={styles.logo} />
        </div>
        <ul className={styles.connectionList}>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tattoo_blackrituals/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>10:00 - 20:00</li>
          <li>Lunes - Viernes</li>
        </ul>
      </div>
    </div>
  );
};
