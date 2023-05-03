import React from 'react';
import styles from './ImgLinkCard.module.scss';
import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ImgLinkCard = ({ data, index }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Link to={'/gallery/' + index} className={styles.imgLink}>
          <img src={data.imgData[0]} alt="albumImg" />
          <div className={styles.imgAddText}>Album</div>
          <BsPlusLg className={styles.plusIco} />
        </Link>
        <div className={styles.descBox}>
          <h3 className={styles.descTitle}>{data.title}</h3>
          <p className={styles.numOfPhot}>{data.imgData.length} photos</p>
        </div>
      </div>
    </div>
  );
};

ImgLinkCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
