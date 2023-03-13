import React from 'react';
import styles from './MapCurtain.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

export const MapCurtain = () => {
  const curtain = React.useRef(null);
  const onClickHandler = () => {
    const img = curtain.current;
    img.classList.toggle(styles.hide);
  };
  return (
    <div className={styles.root} ref={curtain}>
      <Logo onClick={onClickHandler} />
    </div>
  );
};
