import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as LogoText } from '../../assets/icons/LogoText.svg';

export const MenuBar = () => {
  const [background, setBackground] = React.useState('rgba(0, 0, 0, 0)');

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const newBackground = scrollTop > 50 ? 'rgba(0, 0, 0, 0.5)' : background;
    setBackground(newBackground);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={styles.root} style={{ background: background }}>
      <LogoText className={styles.logo} />
      <menu className={styles.menu}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contacts</li>
        <li className={styles.menuItem}>Works</li>
      </menu>
      <button className={styles.navButton}>
        <div className="line line__1"></div>
        <div className="line line__2"></div>
        <div className="line line__3"></div>
      </button>
    </nav>
  );
};
