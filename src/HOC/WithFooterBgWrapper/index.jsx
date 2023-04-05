import React from 'react';
import PropTypes from 'prop-types';
import { HomeSections, SlimFooter } from '../../sections';
import { MenuBar } from '../../components';
import { motion, useScroll, useTransform } from 'framer-motion';
import grayBg from '../../assets/img/grayBg.webp';
import styles from './WithFooterBgWrapper.module.scss';

export const WithFooterBgWrapper = ({ Component }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0', '60%']);
  return (
    <div className={styles.root} ref={ref}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${grayBg})`,
        }}
        className={styles.backgroundElem}
      />
      <MenuBar isScrolled={true} />
      <Component />
      <SlimFooter />
    </div>
  );
};

WithFooterBgWrapper.propTypes = {
  Component: PropTypes.func.isRequired,
};
