import React from 'react';
import styles from './ImgLinkCard.module.scss';
import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ImgLinkCard = ({ data, index }) => {
  return (
    <div className={styles.root}>
      <Link to={'/gallery/' + index} className={styles.imgLink}>
        <img src={data.linkPhoto} alt="albumImg" />
        <div className={styles.imgAddText}>Album</div>
        <BsPlusLg className={styles.plusIco} />
      </Link>
      <div className={styles.infoContainer}>
        <h3 className={styles.descTitle}>{data.title}</h3>
        <p>{data.imgData.length} photos</p>
        {data.desc && <p>{data.desc}</p>}
      </div>
    </div>
  );
};

ImgLinkCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkPhoto: PropTypes.string.isRequired,
    imgData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    desc: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
