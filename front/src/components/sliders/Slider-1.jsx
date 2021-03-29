//slider with data block

import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import PropTypes from 'prop-types';
import { Spiner } from '../../utils/spiner';

SwiperCore.use([Navigation, Autoplay]);

function Slider({ slides }) {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  if (slides.length === 0) {
    return (
      <div className="swiper-slide">
        <div className="container">
          <div className="swiper-slide__content">
            <Spiner />
          </div>
        </div>
      </div>
    );
  }

  const slidesList = slides.map((slide, idx) => (
    <div
      key={idx + slide.title}
      className="swiper-slide"
      style={{ backgroundImage: `url(${slide.urlImg})` }}>
      <div className="container">
        <div className="swiper-slide__content">
          <div className="swiper-slide__content-wrapper">
            <h2 className="swiper-slide__title line">{slide.title}</h2>
            <p className="swiper-slide__content-text">{slide.text}</p>
            <div className="swiper-slide__content-control control-buy">
              <div className="price">
                ${slide.price}
                <span>/day</span>
              </div>
              <a href="/" className="btn btn-green">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <Swiper {...params}>{slidesList}</Swiper>;
}
export default Slider;

Slider.propTypes = {
  slides: PropTypes.array,
};
