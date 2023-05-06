import React from 'react';
import styles from './Gallery.module.scss';
import { Fancybox } from '../../components';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Gallery = ({ data }) => {
  const galleryId = useParams().galleryId;
  const newData = data.find((item) => item.route === galleryId);
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
        {newData.imgData.map((i, index) => (
          <a
            className={styles.imgLink}
            key={index}
            href={i}
            data-fancybox={newData.title}
          >
            <img className={styles.img} src={i} />
          </a>
        ))}
      </Fancybox>
    </section>
  );
};

const GalleryDataType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  linkPhoto: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  imgData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  desc: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.string),
});

Gallery.propTypes = {
  data: PropTypes.arrayOf(GalleryDataType).isRequired,
};
