import React from 'react';
import styles from './ImgLinkCard.module.scss';
import PropTypes from 'prop-types';
import { BsPlusLg } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { SquareBtn } from '../../components/';

export const ImgLinkCard = ({ data }) => {
  const location = useLocation().pathname;
  return (
    <div className={styles.root}>
      <Link to={location + '/gallery/' + data.route} className={styles.imgLink}>
        <img src={data.linkPhoto} alt="albumImg" />
        <div className={styles.imgAddText}>Album</div>
        <BsPlusLg className={styles.plusIco} />
      </Link>
      <div className={styles.infoContainer}>
        <h3 className={styles.descTitle}>{data.title}</h3>
        <p>{data.imgData.length} photos</p>
        <div style={{ display: 'flex', gap: '0 10px' }}>
          {data.style && data.style.map((i, index) => <p key={index}>#{i}</p>)}
        </div>
        {data.desc && <p className={styles.desc}>{data.desc}</p>}
        {data.social && (
          <div className={styles.socialBtnContainer}>
            {data.social.map((i, index) => (
              <a key={index} href={i.link} target="_blank" rel="noreferrer">
                <SquareBtn text={i.title} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ImgLinkCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    linkPhoto: PropTypes.string.isRequired,
    imgData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    desc: PropTypes.string,
    social: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string, link: PropTypes.string })
    ),
    style: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
