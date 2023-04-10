import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import ErrorImg from '../../assets/img/ErrorImgSlider.jpg';
import { Fancybox } from '../../utils/fancybox';
import PropTypes from 'prop-types';

export const Slider = ({ data, fancyData }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: false,
    swipe: false,
    // lazyLoad: true,
  };
  const handleImageError = (event) => {
    event.target.src = ErrorImg;
  };
  return (
    <>
      {data.length !== 0 ? (
        <Fancybox>
          <SlickSlider {...settings}>
            {data.map((i) => (
              <a
                key={fancyData}
                className="slideItem"
                href={i}
                data-fancybox={fancyData}
              >
                <img
                  className="img"
                  src={i}
                  alt={fancyData}
                  onError={handleImageError}
                />
              </a>
            ))}
          </SlickSlider>
        </Fancybox>
      ) : (
        <img src={ErrorImg} style={{ width: '100%', height: '100%' }} />
      )}
    </>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  fancyData: PropTypes.string.isRequired,
};
