import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import styles from './LoadingOverlay.module.scss';

export const LoadingOverlay = ({ loading }) => {
  const strings = ['Loading...', ''];
  return (
    <div
      className={`${styles.root} ${
        loading ? '' : styles.isFinished
      } secondaryFont`}
    >
      <Typed strings={strings} typeSpeed={100} backSpeed={40} loop={true} />
    </div>
  );
};

LoadingOverlay.propTypes = {
  loading: PropTypes.bool.isRequired,
};
