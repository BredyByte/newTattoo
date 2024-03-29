import React from 'react';
import styles from './ErrorLayout.module.scss';
import { Link } from 'react-router-dom';
import { SquareBtn } from '../../components';

export const ErrorLayout = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.message}>Page not found</h3>
      <Link to="/">
        <SquareBtn text="Return home" moving={false} />
      </Link>
    </div>
  );
};
