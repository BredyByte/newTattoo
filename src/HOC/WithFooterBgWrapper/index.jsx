import React from 'react';
import PropTypes from 'prop-types';
import { MenuBar, Title, Footer } from '../../components';
import { motion, useScroll, useTransform } from 'framer-motion';
import grayBg from '../../assets/img/grayBg.webp';
import styles from './WithFooterBgWrapper.module.scss';

export const WithFooterBgWrapper = ({ Component, titleText }) => {
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
      {titleText && <Title text={titleText} forRouterPage={true} />}
      <MenuBar isScrolled={true} />
      <Component />
      <Footer />
    </div>
  );
};

WithFooterBgWrapper.propTypes = {
  Component: PropTypes.func.isRequired,
  titleText: PropTypes.string,
};
