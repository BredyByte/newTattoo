import React from 'react';
import styles from './CustomCursor.module.scss';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const variants = {
    default: {
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      mixBlendMode: 'difference',
    },
  };

  React.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);
    document.querySelector('html').style.cursor = 'none';
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.querySelector('html').style.cursor = null;
    };
  }, []);
  return (
    <>
      <motion.div
        className={`${styles.root} cursor`}
        variants={variants}
        animate={'default'}
        transition={{ duration: 0, type: 'just' }}
      />
    </>
  );
};
