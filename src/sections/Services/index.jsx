import React from 'react';
import styles from './Services.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { Title, ToSectionBtn, PreviewPageBtn } from '../../components';

export const Services = () => {
  return (
    <div className={styles.root}>
      <div className={styles.bgc}>
        <Logo />
      </div>
      <div className={`${styles.contentContainer} container`}>
        <div className={styles.contentInner}>
          <div className={styles.infoContainer}>
            <Title
              text="Our Services"
              additionalStyles={{
                color: '#000',
                marginBottom: '30px',
              }}
            />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ToSectionBtn text="Nuestros trabajos" />
          </div>
          <div className={styles.galleryContainer}></div>
        </div>
      </div>
    </div>
  );
};
