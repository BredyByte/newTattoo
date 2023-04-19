import React from 'react';
import styles from './WorksPageItem.module.scss';
import testImg from '../../assets/img/swiperImg4.jpg';
import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';

export const WorksPageItem = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <a href="#" className={styles.imgLink}>
          <img src={data.imgData[0]} alt="albumImg" />
          <div className={styles.imgAddText}>Album</div>
          <BsPlusLg className={styles.plusIco} />
        </a>
        <div className={styles.descBox}>
          <h3 className={styles.descTitle}>{data.title}</h3>
          <p className={styles.numOfPhot}>{data.imgData.length} photos</p>
        </div>
      </div>
    </div>
  );
};

WorksPageItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
