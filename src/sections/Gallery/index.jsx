import React from 'react';
import styles from './Gallery.module.scss';
import test from '../../assets/img/tattooGalleryTest.JPG';
import { Fancybox } from '../../components';

export const Gallery = () => {
  return (
    <section className={styles.root}>
      <Fancybox
        transition="slide"
        options={{
          Images: {
            initialSize: 'fit',
            protected: true,
            zoomOpacity: true,
          },
          Thumbs: {
            type: 'classic',
            showOnStart: false,
          },
          Toolbar: {
            display: {
              left: ['infobar'],
              middle: [],
              right: ['close'],
            },
          },
          Transition: {
            type: 'crossfade',
          },
        }}
      >
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
        <a className={styles.imgLink} href={test} data-fancybox="gallery">
          <img className={styles.img} src={test} alt="" />
        </a>
      </Fancybox>
    </section>
  );
};
