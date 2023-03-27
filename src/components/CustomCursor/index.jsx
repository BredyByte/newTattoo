import React from 'react';
import styles from './CustomCursor.module.scss';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = React.useState('default');
  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      mixBlendMode: 'difference',
      backgroundColor: 'white',
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
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
        className={styles.root}
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};
