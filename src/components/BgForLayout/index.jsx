import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import grayBg from '../../assets/img/grayBgMin.webp';
import styles from './BgForLayout.module.scss';
import PropTypes from 'prop-types';

export const BgForLayout = ({ children }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0', '30%']);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className={styles.root} ref={ref}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${grayBg})`,
        }}
        className={styles.backgroundElem}
      />
      {children}
    </div>
  );
};

BgForLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
