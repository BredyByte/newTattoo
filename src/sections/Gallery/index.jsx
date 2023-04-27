import React from 'react';
import styles from './Gallery.module.scss';
import test from '../../assets/img/tattooGalleryTest.JPG';
import { Fancybox } from '../../components';

export const Gallery = () => {
  return (
    <section className={styles.root}>
      <Fancybox>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
        <a
          className={styles.imgLink}
          href={test}
          data-fancybox="gallery"
          data-caption="Here some description"
        >
          <img className={styles.img} src={test} alt="" />
        </a>
      </Fancybox>
    </section>
  );
};
