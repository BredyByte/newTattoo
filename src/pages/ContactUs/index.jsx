import React from 'react';
import { Footer, Contacts, NewFooter } from '../../sections';
import { MenuBar } from '../../components';
import grayBg from '../../assets/img/grayBg.webp';
import styles from './ContactUs.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ContactUs = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0', '60%']);
  return (
    <div className={styles.root} ref={ref}>
      <MenuBar isScrolled={true} />
      <motion.div
        style={{
          y,
          backgroundImage: `url(${grayBg})`,
        }}
        className={styles.backgroundElem}
      />
      <Contacts />
      <NewFooter />
    </div>
  );
};
