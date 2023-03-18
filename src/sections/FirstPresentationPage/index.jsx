// Photos from https://citizenofnowhe.re/lines-of-the-city
import React from 'react';
import './test.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { Title } from '../../components';

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Image = ({ id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        {/*<img src={`/${id}.jpg`} alt="A London skyscraper" />*/}
        <div className="img"></div>
      </div>
      <motion.h2 className="numbers" style={{ y }}>
        <Title text={id} />
      </motion.h2>
    </section>
  );
};

export const FirstPresentationPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {['About', 'Services', 'Contacts', 'Works', 'Shop'].map(
        (image, index) => (
          <Image key={index} id={image} />
        )
      )}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

Image.propTypes = {
  id: PropTypes.string.isRequired,
};
