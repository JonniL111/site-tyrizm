//slider with thumbnailse

import React, { useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import SwiperCore, { Controller, Thumbs, Navigation, Pagination } from 'swiper';


SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function SliderThumbs({ slides }) {
  const gallerySwiperRef = useRef(null);
  const thumbnailSwiperRef = useRef(null);
  const gallerySwiperParams = {
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  const thumbnailSwiperParams = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',    
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
    if (gallerySwiper.controller && thumbnailSwiper.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, []);

  const slidesList = slides.map((slide, idx) => 
    (
    <div
      key={idx}
      className="swiper-slide"
      style={{ backgroundImage: `url(${slide.src})` }}
    />
  ));

  return (
    <>
      <div className="gallery-top">
        <div className="swiper-wrapper">
          <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
            {slidesList}
          </Swiper>
        </div>
      </div>

      <div className="gallery-thumbs">
        <div className="swiper-wrapper">
          <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
            {slidesList}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SliderThumbs;

SliderThumbs.propTypes = {
  slides: PropTypes.array,
};



