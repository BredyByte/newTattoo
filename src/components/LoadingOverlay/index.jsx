import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadingOverlay.module.scss';
import { TypingComponent } from '../../components';

export const LoadingOverlay = ({ loading }) => {
  const textSettings = ['Loading...', 1000, '', 1000];
  return (
    <div
      className={`${styles.root} ${
        loading ? '' : styles.isFinished
      } secondaryFont`}
    >
      <TypingComponent textSettings={textSettings} />
    </div>
  );
};

LoadingOverlay.propTypes = {
  loading: PropTypes.bool.isRequired,
};
