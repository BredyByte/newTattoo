import React from 'react';
import styles from './Contacts.module.scss';
import { MapCurtain, Map, TitleHomeSections } from '../../components';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const linkListData = [
  {
    link: 'https://www.instagram.com/tattoo_blackrituals/',
    icon: AiFillInstagram,
    text: 'Instagram',
  },
  {
    link: 'tel:+34662483313',
    icon: BsFillTelephoneFill,
    text: '+34 662 483 313',
  },
  {
    link: 'tel:+34623201005',
    icon: BsFillTelephoneFill,
    text: '+34 623 201 005',
  },
  {
    link: 'https://goo.gl/maps/3n9n7otCfzxxeRdq6',
    icon: FaMapMarkerAlt,
    text: 'Localización',
  },
];

export const Contacts = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <TitleHomeSections text="Contacts" />
        <ul className={styles.list}>
          {linkListData.map((i) => (
            <li key={i.link} className={styles.listItem}>
              <a href={i.link} target="_blank" rel="noreferrer">
                {i.icon()}
                {i.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mapContainer}>
        <Map />
        <MapCurtain />
      </div>
    </div>
  );
};
