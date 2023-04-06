import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import sliderImg1 from '../../assets/img/Studio3.webp';
import { Fancybox } from '../../utils/fancybox';
import PropTypes from 'prop-types';

export const Slider = ({ data }) => {
  const [defaultImage, setDefaultImage] = useState(sliderImg1);
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dotsClass: 'slickDots',
    defaultImage: defaultImage,
    customPaging: (i) => <button className="dotItem"></button>,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
              key={i.id}
              className="slideItem"
              href={i.imgLink}
              data-fancybox={i.fancy}
            >
              <img
                className="img"
                src={i.imgLink}
                onError={handleErrorImage}
                alt="Slider Img"
              />
            </a>
          ))}
        </SlickSlider>
      </Fancybox>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.object,
};
