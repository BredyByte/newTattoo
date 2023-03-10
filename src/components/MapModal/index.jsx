import React from 'react';
import styles from './MapModal.module.scss';

export const MapModal = () => {
  return (
    <div className={styles.placeDiv}>
      <div className={styles.placecard__container}>
        <div className={styles.placecard__left}>
          <p className={styles.placecard__business_name}>
            Black Rituals Tattoo
          </p>
          <p className={styles.placecard__info}>
            C. Martínez Maldonado, 19, local 1, 29007 Málaga
          </p>
          <a
            className={styles.placecard__view_large}
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/3n9n7otCfzxxeRdq6"
            id="A_41"
          >
            View larger map
          </a>
        </div>
      </div>
    </div>
  );
};
