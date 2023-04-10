import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import sliderImg1 from '../../assets/img/Studio3.webp';
import { Fancybox } from '../../utils/fancybox';
import PropTypes from 'prop-types';

export const Slider = ({ data, fancyData }) => {
  const [defaultImage, setDefaultImage] = useState(sliderImg1);
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    swipe: false,
    defaultImage: defaultImage,
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: sliderImg1,
    }));
  };

  return (
    <div className="slider">
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
                onError={handleErrorImage}
                alt={fancyData}
              />
            </a>
          ))}
        </SlickSlider>
      </Fancybox>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  fancyData: PropTypes.string.isRequired,
};
