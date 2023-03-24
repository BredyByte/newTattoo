import React from 'react';
import styles from './CustomBtn.module.scss';
import PropTypes from 'prop-types';

export const CustomBtn = ({ text }) => {
  return (
    <button className={`${styles.btn} ${styles.drawBorder}`}>{text}</button>
  );
};

CustomBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
