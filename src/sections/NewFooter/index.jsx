import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as TextLogo } from '../../assets/icons/LogoText.svg';
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import grayBg from '../../assets/img/grayBg.webp';

export const NewFooter = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start', 'end start'],
    offset: ['start end', 'end end'],
  });
  // const y = useTransform(scrollY, , [0, 200]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  return (
    <motion.div
      ref={ref}
      className={styles.root}
      style={{
        backgroundImage: `url(${grayBg})`,
        backgroundPositionY: y,
      }}
    >
      <div className={`${styles.contentContainer} container`}>
        <div className={styles.imgContainer}>
          <TextLogo className={styles.logo} />
        </div>
        <ul className={styles.connectionList}>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tattoo_blackrituals/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>10:00 - 20:00</li>
          <li>Lunes - Viernes</li>
        </ul>
        <ul className={styles.connectionList}>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tattoo_blackrituals/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>10:00 - 20:00</li>
          <li>Lunes - Viernes</li>
        </ul>
        <ul className={styles.connectionList}>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tattoo_blackrituals/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>10:00 - 20:00</li>
          <li>Lunes - Viernes</li>
        </ul>
        <ul className={styles.connectionList}>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tattoo_blackrituals/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>10:00 - 20:00</li>
          <li>Lunes - Viernes</li>
        </ul>
        <ul className={styles.connectionList}>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a href="tel:+34623201005">+34 623 201 005</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tattoo_blackrituals/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>10:00 - 20:00</li>
          <li>Lunes - Viernes</li>
        </ul>
      </div>
    </motion.div>
  );
};
