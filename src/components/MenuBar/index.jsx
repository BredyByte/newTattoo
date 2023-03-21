import React from 'react';
import styles from './MenuBar.module.scss';
import { ReactComponent as LogoText } from '../../assets/icons/LogoText.svg';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

const arr = ['Home', 'About', 'Service', 'Works', 'Shop'];

export const MenuBar = () => {
  const [isBackground, setIsBackground] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const disableScroll = () => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.marginRight = scrollBarWidth + 'px';
    document.body.style.overflowY = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.marginRight = '';
    document.body.style.overflowY = 'auto';
  };

  const handleButtonClick = () => {
    const handleTouchMove = (e) => e.preventDefault();
    setIsOpen((prev) => !prev);
    if (isOpen) {
      enableScroll();
      document.removeEventListener('touchmove', handleTouchMove);
    } else {
      disableScroll();
      document.addEventListener('touchmove', handleTouchMove);
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
      <menu className={`${styles.menu} ${isOpen ? styles.isOpen : ''}`}>
        {arr.map((i) => (
          <li className={styles.menuItem} key={i}>
            {i}
          </li>
        ))}
      </menu>
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
