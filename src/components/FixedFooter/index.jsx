import React from 'react';
import styles from './FixedFooter.module.scss';
import PropTypes from 'prop-types';

export const FixedFooter = ({ isEndOfPage }) => {
  return (
    <div className={`${styles.root} ${isEndOfPage ? styles.active : ''}`}>
      Hello
    </div>
  );
};

FixedFooter.propTypes = {
  isEndOfPage: PropTypes.bool.isRequired,
};
