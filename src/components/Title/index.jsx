import React from 'react';
import styles from './Title.module.scss';
import PropTypes from 'prop-types';

export const Title = ({ text, style }) => {
  return (
    <h2 className={`${styles.root} secondaryFont`} style={style}>
      {text}
    </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
