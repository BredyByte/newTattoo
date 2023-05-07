import React from 'react';
import styles from './MenuBar.module.scss';
import { ReactComponent as LogoText } from '../../assets/icons/LogoText.svg';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { menuBarData } from '../../assets/data';

export const MenuBar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const deviceWidth = window.matchMedia('(max-width: 920px)');
  const setHeight = () => {
    document.getElementById(
      'ToggleMenu'
    ).style.minHeight = `${window.screen.height}px`;
  };
  React.useEffect(() => {
    if (deviceWidth.matches) {
      setHeight();
    }
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className={`${styles.root} ${isScrolled ? styles.active : ''}`}>
      <Link to="/">
        <LogoText className={styles.logo} />
      </Link>
      <menu
        id="ToggleMenu"
        className={`${styles.menu} ${isOpen ? styles.isOpen : ''}`}
      >
        {menuBarData.map((i, index) => (
          <NavLink
            to={i.link}
            style={({ isActive }) => (isActive ? { color: '#D99938' } : {})}
            key={index}
          >
            {i.title}
          </NavLink>
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
