import React from 'react';
import styles from './Contacts.module.scss';
import { MapCurtain, Map } from '../../components';
import { ReactComponent as MapI } from '../../assets/icons/Map.svg';
import { ReactComponent as PhoneI } from '../../assets/icons/Phone.svg';
import { ReactComponent as InstI } from '../../assets/icons/Inst.svg';

export const Contacts = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        {/*<Title text="Contacts" />*/}
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <InstI />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/tattoo_blackrituals/"
            >
              Instagram
            </a>
          </li>
          <li className={styles.listItem}>
            <PhoneI />
            <a target="_blank" rel="noreferrer" href="tel:+34662483313">
              +34 662 483 313
            </a>
          </li>
          <li className={styles.listItem}>
            <PhoneI />
            <a target="_blank" rel="noreferrer" href="tel:+34623201005">
              +34 623 201 005
            </a>
          </li>
          <li className={styles.listItem}>
            <MapI />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/3n9n7otCfzxxeRdq6"
            >
              Localización
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.mapContainer}>
        <Map />
        <MapCurtain />
      </div>
    </div>
  );
};
