import React from 'react';
import styles from './PresentationPage.module.scss';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { Title } from '../../components';
import { presentationPageData } from '../../assets';
import grayBg from '../../assets/img/grayBg.webp';

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Image = ({ img, title }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div ref={ref}>{/*<img src={`${id}`} alt="A London skyscraper" />*/}</div>
      <motion.h2 className={styles.numbers} style={{ y }}>
        <Title text={title} />
      </motion.h2>
    </section>
  );
};

export const PresentationPage = () => {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <>
      {presentationPageData.map((obj, index) => (
        <Image key={index} img={obj.img} title={obj.title} />
      ))}

      {/*<motion.div className={styles.progress} style={{ scaleX }} />*/}
    </>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
