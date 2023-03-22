import React from 'react';
import styles from './PresentationPage.module.scss';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { Title } from '../../components';
import { presentationPageData } from '../../assets';
import bg from '../../assets/img/Studio7.webp';

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Image = ({ img, title }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start', 'end start'],
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  return (
    <section ref={ref}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${img})`,
        }}
        className={styles.background}
      />
      <div className={styles.content}>
        {/*<img src={`${id}`} alt="A London skyscraper" />*/}
      </div>
      <h2 className={styles.numbers}>
        <Title text={title} />
      </h2>
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
      <div
        className={styles.first}
        style={{
          scrollSnapAlign: 'center',
          minHeight: '100vh',
          width: '100%',
          backgroundImage: `url(${bg})`,
        }}
      ></div>
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
