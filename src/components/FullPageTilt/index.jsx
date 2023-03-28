import React from 'react';
import Tilt from 'react-parallax-tilt';
import img from '../../assets/img/firstPageBg1.png';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import styles from './FullPageTilt.module.scss';
import { ArrowBtn } from '../';
import { ScrollDown } from '../../utils';
import PropTypes from 'prop-types';
import { isMobile } from '../../utils';

export const FullPageTilt = () => {
  if (isMobile()) {
    return (
      <div
        className={styles.root}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={styles.innerElement}>
          <div className={styles.contentContainer}>
            <Logo className={styles.logo} />
            <div className={`${styles.title} secondaryFont`}>
              Black Rituals Tattoo
            </div>
            <div className={`${styles.subtitle} secondaryFont`}>
              <span className={styles.subtitleText}></span>
              <ArrowBtn
                moving={true}
                text="Enter"
                onClickHandler={ScrollDown}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Tilt
      className={styles.root}
      perspective={1000}
      transitionSpeed={1000}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={0.95}
      gyroscope={true}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.innerElement}>
        <div className={styles.contentContainer}>
          <Logo className={styles.logo} />
          <div className={`${styles.title} secondaryFont`}>
            Black Rituals Tattoo
          </div>
          <div className={`${styles.subtitle} secondaryFont`}>
            <span className={styles.subtitleText}></span>
            <ArrowBtn moving={true} text="Enter" onClickHandler={ScrollDown} />
          </div>
        </div>
      </div>
    </Tilt>
  );
};
