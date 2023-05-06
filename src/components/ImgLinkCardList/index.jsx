import React from 'react';
import styles from './ImgLinkCardList.module.scss';
import { ImgLinkCard } from '../../components';
import PropTypes from 'prop-types';

export const ImgLinkCardList = ({ data }) => {
  return (
    <section className={styles.root}>
      {data.map((i, index) => (
        <ImgLinkCard key={index} data={i} />
      ))}
    </section>
  );
};

const serviceDataType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  linkPhoto: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  imgData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  desc: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.string),
});

ImgLinkCardList.propTypes = {
  data: PropTypes.arrayOf(serviceDataType).isRequired,
};
