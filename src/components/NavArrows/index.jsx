import React from 'react';
import styles from './NavArrows.module.scss';
import { ArrowBtn } from '../';
import { ScrollDown, ScrollTop } from '../../utils';
import PropTypes from 'prop-types';

export const NavArrows = ({ isScrolled, isEndOfPage }) => {
  return (
    <div className={`${styles.root} ${isScrolled ? styles.isOpen : ''}`}>
      <ArrowBtn
        moving={false}
        onClickHandler={ScrollTop}
        additionalStyles={{ transform: 'rotate(180deg)', marginBottom: '40px' }}
      />
      <ArrowBtn
        moving={false}
        onClickHandler={ScrollDown}
        isDisable={isEndOfPage}
      />
    </div>
  );
};

NavArrows.propTypes = {
  isScrolled: PropTypes.bool,
  isEndOfPage: PropTypes.bool,
};
