import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as TextLogo } from '../../assets/icons/LogoText.svg';
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import grayBg from '../../assets/img/Studio7.webp';
import { AiOutlineInstagram } from 'react-icons/ai';

const iconsContent = [
  {
    link: 'https://www.instagram.com/tattoo_blackrituals/',
    icon: AiOutlineInstagram,
  },
];

export const NewFooter = () => {
  return (
    <div className={styles.root}>
      <p className={styles.rights}>
        All images are Copyright 2022. Black Rituals Tattoo All rights reserved.
      </p>
      <ul className={styles.iconsContainer}>
        {iconsContent.map((i, index) => (
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
    </div>
  );
};
