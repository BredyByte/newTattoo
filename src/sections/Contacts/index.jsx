import React from 'react';
import styles from './Contacts.module.scss';
import { MapCurtain, Map } from '../../components';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { CloseOpenTracker } from '../../components';

const linkListData = [
  {
    link: 'https://www.instagram.com/tattoo_blackrituals/',
    icon: AiFillInstagram,
    text: 'tattoo_blackrituals',
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
    text: 'C. Martínez Maldonado, 19, local 1, 29007 Málaga',
  },
];

export const Contacts = () => {
  return (
    <section className={styles.root}>
      <div className={styles.contentContainer}>
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
        <ul className={styles.scheduleList}>
          <li>
            <h3>
              We are currently <CloseOpenTracker />
            </h3>
          </li>
          <li>
            <h3>Horario:</h3>
          </li>
          <li>Monday - 10:00 – 20:30</li>
          <li>Tuesday - 10:00–20:30</li>
          <li>Wednesday - 10:00–20:30</li>
          <li>Thursday - 10:00–20:30</li>
          <li>Friday - 10:00–20:30</li>
          <li>Saturday - Closed</li>
          <li>Sunday - Closed</li>
        </ul>
      </div>
      <div className={styles.mapContainer}>
        <Map />
        <MapCurtain />
      </div>
    </section>
  );
};
