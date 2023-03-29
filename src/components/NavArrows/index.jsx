import React from 'react';
import styles from './NavArrows.module.scss';
import { ArrowBtn } from '../';
import { scrollTop, scrollDown } from '../../utils';
import PropTypes from 'prop-types';

export const NavArrows = ({ isScrolled, isEndOfPage }) => {
  return (
    <div className={`${styles.root} ${isScrolled ? styles.isOpen : ''}`}>
      <ArrowBtn
        moving={false}
        onClickHandler={scrollTop}
        additionalStyles={{
          transform: 'rotate(180deg)',
          marginBottom: '40px',
          padding: '1px',
        }}
      />
      <ArrowBtn
        moving={false}
        onClickHandler={scrollDown}
        isDisable={isEndOfPage}
        additionalStyles={{
          marginLeft: '1.5px',
        }}
      />
    </div>
  );
};

NavArrows.propTypes = {
  isScrolled: PropTypes.bool,
  isEndOfPage: PropTypes.bool,
};
