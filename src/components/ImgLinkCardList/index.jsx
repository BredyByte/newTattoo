import React from 'react';
import styles from './ImgLinkCardList.module.scss';
import { ImgLinkCard } from '../../components';
import PropTypes from 'prop-types';

export const ImgLinkCardList = ({ data }) => {
  return (
    <section className={styles.root}>
      {data.map((i, index) => (
        <ImgLinkCard key={index} data={i} index={index} />
      ))}
    </section>
  );
};

const serviceDataType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  imgData: PropTypes.arrayOf(PropTypes.string).isRequired,
});

ImgLinkCardList.propTypes = {
  data: PropTypes.arrayOf(serviceDataType).isRequired,
};
