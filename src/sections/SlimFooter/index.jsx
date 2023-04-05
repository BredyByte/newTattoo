import React from 'react';
import styles from './SlimFooter.module.scss';
import { AiOutlineInstagram } from 'react-icons/ai';

const iconsContent = [
  {
    link: 'https://www.instagram.com/tattoo_blackrituals/',
    icon: AiOutlineInstagram,
  },
];

export const SlimFooter = () => {
  return (
    <div className={styles.root}>
      <p className={styles.rights}>
        All images are Copyright 2022. Black Rituals Tattoo. All rights
        reserved.
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
