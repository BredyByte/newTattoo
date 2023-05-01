import React from 'react';
import styles from './Gallery.module.scss';
import { Fancybox } from '../../components';
import { worksData } from '../../assets/data';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Gallery = () => {
  const params = useParams();
  const data = worksData[params.galleryId];
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
        {data.imgData.map((i, index) => (
          <a
            className={styles.imgLink}
            key={index}
            href={i}
            data-fancybox={data.title}
          >
            <img className={styles.img} src={i} />
          </a>
        ))}
      </Fancybox>
    </section>
  );
};
