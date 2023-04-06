import React from 'react';
import styles from './Services.module.scss';
import { Slider } from '../../components';
import img1 from '../../assets/img/swiperImg1.jpeg';
import img2 from '../../assets/img/swiperImg2.jpg';
import img3 from '../../assets/img/swiperImg3.jpeg';
import img4 from '../../assets/img/swiperImg4.jpg';

const sliderTestData = [
  {
    id: 1,
    imgLink: img1,
    fancy: 'training',
  },
  {
    id: 2,
    imgLink: img2,
    fancy: 'training',
  },
  {
    id: 3,
    imgLink: img3,
    fancy: 'training',
  },
  {
    id: 4,
    imgLink: img4,
    fancy: 'training',
  },
];

export const Services = () => {
  return (
    <section className={styles.root}>
      <div className={styles.infoContainer}>
        <h3 className={`${styles.title} secondaryFont`}>BlackWork</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className={`${styles.price} secondaryFont`}>40$</p>
      </div>
      <div className={styles.sliderContainer}>
        <Slider data={sliderTestData} />
      </div>
    </section>
  );
};
