import React from 'react';
import styles from './ToSectionBtn.module.scss';
import PropTypes from 'prop-types';

export const ToSectionBtn = ({ text, isBlack }) => {
  return (
    <div className={`${styles.root} ${isBlack && styles.black}`}>
      <p className={styles.text}>{text}</p>
      <div className={styles.circle}>
        <span className={styles.arrow}></span>
      </div>
    </div>
  );
};

ToSectionBtn.propTypes = {
  text: PropTypes.string.isRequired,
  isBlack: PropTypes.bool,
};
