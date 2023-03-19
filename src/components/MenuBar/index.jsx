import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as LogoText } from '../../assets/icons/LogoText.svg';
import { motion } from 'framer-motion';
import { useScroll } from '../../animations/useScroll';
import { navAnimation } from '../../animations';

export const MenuBar = () => {
  const [isBackground, setIsBackground] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [element, controls] = useScroll();

  const disableScroll = () => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.marginRight = scrollBarWidth + 'px';
    document.body.style.overflowY = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.marginRight = 0;
    document.body.style.overflowY = 'auto';
  };

  const handleButtonClick = () => {
    const handleTouchMove = (e) => e.preventDefault();
    setIsBackground(false);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 400);
    if (isOpen) {
      enableScroll();
      document.removeEventListener('touchmove', handleTouchMove);
    } else {
      disableScroll();
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    scrollTop > 50 ? setIsBackground(true) : setIsBackground(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.root} ${isBackground ? styles.active : ''}`}>
      <LogoText className={styles.logo} />
      <motion.menu
        ref={element}
        variants={navAnimation}
        transition={{ delay: 0.1 }}
        animate={controls}
        className={`${styles.menu} ${isOpen ? styles.isOpen : ''}`}
      >
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contacts</li>
        <li className={styles.menuItem}>Works</li>
      </motion.menu>
      <button
        className={`${styles.navButton} ${isOpen ? styles.close : ''}`}
        onClick={handleButtonClick}
      >
        <div className={`${styles.line} ${styles.line__1}`}></div>
        <div className={`${styles.line} ${styles.line__2}`}></div>
        <div className={`${styles.line} ${styles.line__3}`}></div>
      </button>
    </nav>
  );
};
