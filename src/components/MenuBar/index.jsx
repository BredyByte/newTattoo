import React from 'react';
import styles from './MenuBar.module.scss';
import { ReactComponent as LogoText } from '../../assets/icons/LogoText.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const arr = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About' },
  { link: '/services', title: 'Services' },
  { link: '/works', title: 'Works' },
  { link: '/shop', title: 'Shop' },
  { link: '/contacts', title: 'Contacts' },
];

export const MenuBar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const deviceWidth = window.matchMedia('(max-width: 1024px)');
  const setHeight = () => {
    document.getElementById(
      'ToggleMenu'
    ).style.minHeight = `${window.screen.height}px`;
  };
  React.useEffect(() => {
    if (deviceWidth.matches) {
      window.addEventListener('resize', setHeight);
      setHeight();
    }
    return () => {
      if (deviceWidth.matches) {
        window.removeEventListener('resize', setHeight);
      }
    };
  }, []);

  // React.useEffect(() => {
  //   document.getElementById(
  //     'ToggleMenu'
  //   ).style.minHeight = `${window.innerHeight}px`;
  // }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className={`${styles.root} ${isScrolled ? styles.active : ''}`}>
      <LogoText className={styles.logo} />
      <menu
        id="ToggleMenu"
        className={`${styles.menu} ${isOpen ? styles.isOpen : ''}`}
      >
        {arr.map((i, index) => (
          <Link to={i.link} className={styles.menuItem} key={index}>
            {i.title}
          </Link>
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

MenuBar.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};
