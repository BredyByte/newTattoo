import React from 'react';
import './styles.scss';
import styles from './PresentationPage.module.scss';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import { Title } from '../../components';
import bg1 from '../../assets/img/Studio.webp';
import bg3 from '../../assets/img/Studio6.webp';
import bg2 from '../../assets/img/Studio2.webp';
import bg4 from '../../assets/img/Studio7.webp';
import bg5 from '../../assets/img/Studio3.webp';
import { presentationPageData } from '../../assets';

export const PresentationPage = () => {
  return (
    <div className="Test">
      {presentationPageData.map((i, index) => (
        <Parallax strength={400} className="Hello" key={i.title}>
          <Background>
            <div
              className={styles.background}
              style={{
                backgroundImage: `url(${i.img})`,
              }}
            />
          </Background>
          <div className={styles.content}>
            <Title text={i.title} />
          </div>
        </Parallax>
      ))}
    </div>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
