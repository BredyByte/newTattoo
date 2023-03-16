// Photos from https://citizenofnowhe.re/lines-of-the-city
import React from 'react';
import './test.css';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import PropTypes from 'prop-types';
import { ToSectionBtn } from '../ToSectionBtn';

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
      <motion.h2 className="numbers" style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
};

export const TestFirstPresentationPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image, index) => (
        <Image key={index} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

Image.propTypes = {
  id: PropTypes.number.isRequired,
};
