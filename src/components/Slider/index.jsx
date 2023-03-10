import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperImages } from '../../assets';
import 'swiper/css';
import { Navigation, Thumbs } from 'swiper';
import './Slider.scss';

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      className="carousel"
      onSlideChange={() => console.log('slide change')}
    >
      {swiperImages.map((i, index) => {
        return (
          <SwiperSlide key={index}>
            <img className="sliderImg" src={i} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
