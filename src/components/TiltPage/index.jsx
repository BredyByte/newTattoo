import React from 'react';
import Tilt from 'react-parallax-tilt';
import img from '../../assets/img/firstPageBg1.png';
import { ReactComponent as Logo } from '../../assets/icons/LogoTilt.svg';
import styles from './TiltPage.module.scss';
import { ArrowBtn } from '../';
import { scrollDown } from '../../utils';
import PropTypes from 'prop-types';

export const TiltPage = ({ isMobile }) => {
  if (isMobile) {
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
            <div className={`${styles.btnContainer} secondaryFont`}>
              <ArrowBtn
                moving={false}
                text="Enter"
                onClickHandler={scrollDown}
                forTilt={true}
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
          <div className={`${styles.btnContainer} secondaryFont`}>
            <ArrowBtn
              moving={true}
              text="Enter"
              onClickHandler={scrollDown}
              forTilt={true}
            />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

TiltPage.propTypes = {
  isMobile: PropTypes.bool,
};
