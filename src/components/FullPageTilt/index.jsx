import React from 'react';
import Tilt from 'react-parallax-tilt';
import img from '../../assets/img/firstPageBg1.png';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import './TestTilt.scss';
import { PreviewPageBtn } from '../PreviewPageBtn';
import { motion } from 'framer-motion';

export const FullPageTilt = () => {
  if (window.innerWidth <= 620) {
    return (
      <div
        className="parallaxEffect"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="innerElement">
          <motion.div
            className="contentContainer"
            animate={{
              transform: 'scale(1)',
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: 'tween',
            }}
          >
            <Logo className="logo" />
            <div className="title secondaryFont">Creamos Milagros</div>
            <div className="subtitle secondaryFont">
              <span className="subtitleText">Los mejores tatuajes</span>
              <PreviewPageBtn />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  return (
    <Tilt
      className="parallaxEffect"
      perspective={1000}
      transitionSpeed={1000}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={0.96}
      gyroscope={true}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="innerElement">
        <motion.div
          animate={{
            transform: 'scale(1)',
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'tween',
          }}
          className="contentContainer"
        >
          <Logo className="logo" />
          <div className="title secondaryFont">Creamos Milagros</div>
          <div className="subtitle secondaryFont">
            <span className="subtitleText">Los mejores tatuajes</span>
            <PreviewPageBtn />
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};
