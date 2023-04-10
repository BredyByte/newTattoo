import React from 'react';
import styles from './ServicesList.module.scss';
import { Slider } from '../../components';
import { servicesData } from '../../assets/data';

export const ServicesList = () => {
  return (
    <section className={styles.root}>
      {servicesData.map((i, index) => (
        <div key={index} className={styles.servicesItem}>
          <div className={styles.infoContainer}>
            <h3 className={`${styles.title} secondaryFont`}>{i.name}</h3>
            <p className={styles.desc}>{i.desc}</p>
            <p className={`${styles.price} secondaryFont`}>{i.price}$</p>
          </div>
          <div className={styles.sliderContainer}>
            <Slider data={i.imgData} fancyData={i.name} />
          </div>
        </div>
      ))}
    </section>
  );
};
