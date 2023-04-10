import React from 'react';
import styles from './Services.module.scss';
import { Slider } from '../../components';
import { servicesData } from '../../assets/data';

export const Services = () => {
  return (
    <>
      {servicesData.map((i, index) => (
        <section key={index} className={styles.root}>
          <div className={styles.infoContainer}>
            <h3 className={`${styles.title} secondaryFont`}>{i.name}</h3>
            <p className={styles.desc}>{i.desc}</p>
            <p className={`${styles.price} secondaryFont`}>{i.price}$</p>
          </div>
          <div className={styles.sliderContainer}>
            <Slider data={i.imgData} fancyData={i.name} />
          </div>
        </section>
      ))}
    </>
  );
};
