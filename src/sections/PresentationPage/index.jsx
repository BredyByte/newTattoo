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

export const PresentationPage = () => {
  return (
    <div className="Test">
      {/*<Parallax strength={300} className="Hello">*/}
      {/*  <Background>*/}
      {/*    <div*/}
      {/*      className={styles.background}*/}
      {/*      style={{*/}
      {/*        backgroundImage: `url(${bg1})`,*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Background>*/}
      {/*  <div className={styles.content}>*/}
      {/*    <Title text={'Hello'} />*/}
      {/*  </div>*/}
      {/*</Parallax>*/}
      {/*<Parallax strength={300} className="Hello">*/}
      {/*  <Background>*/}
      {/*    <div*/}
      {/*      style={{*/}
      {/*        minHeight: '100vh',*/}
      {/*        backgroundImage: `url(${bg2})`,*/}
      {/*        backgroundSize: 'cover',*/}
      {/*        backgroundPosition: 'center',*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Background>*/}
      {/*  <div className="Content"></div>*/}
      {/*</Parallax>*/}
      <Parallax
        bgImage={bg1}
        bgStyle={{ height: '100vh' }}
        bgImageAlt="the dog"
        strength={300}
        className="Hello"
      >
        <div className="Content"></div>
      </Parallax>
      <Parallax
        bgImage={bg2}
        bgStyle={{ height: '100vh' }}
        bgImageAlt="the dog"
        strength={300}
        className="Hello"
      >
        <div className="Content"></div>
      </Parallax>
      <Parallax
        bgImage={bg3}
        bgStyle={{ height: '100vh' }}
        bgImageAlt="the dog"
        strength={300}
        className="Hello"
      >
        <div className="Content"></div>
      </Parallax>
    </div>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
