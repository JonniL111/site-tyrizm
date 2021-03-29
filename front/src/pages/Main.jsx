import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Filter } from '../components/filter';
import { MainSlider } from '../components/sliders';
import { Advantages, Categorys, Thumbnails } from '../components/sections';
import { fetchSlides } from '../redux/action/slider';
import { GlobalData } from '../components/hoc/withGlobal';
import { fetchPopularProducts } from '../redux/action/products';

function Maine() {
  const { dispatch, db } = useContext(GlobalData);
  const {
    mainSlider: { slides, isLoaded },
    productsList: { popularProducts },
    categorys,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSlides({ db, url: 'mainslider' }));
  }, []);

  useEffect(() => {
    if (popularProducts.length > 0) return;
    dispatch(fetchPopularProducts({ qount: 6 }));
  }, []);

  

  return (
    <>
      <section className="swiper main-slider">
        <MainSlider slides={slides} />
      </section>

      <section className="section-filter">
        <div className="container">
          <Filter />
        </div>
      </section>

      <section className="categorys">
        <div className="container">
          <Categorys blockTitle={'Популярные категории!'} categorys={categorys} dispatch={dispatch} />
        </div>
      </section>

      <section className="thumbnails">
        <div className="container">
          <Thumbnails
            thumbClass={'col-6 col-md-4'}
            blockTitle={'Популярные варианты'}
            products={popularProducts}
            show={6}
            pages={false}
          />
          <a href="/" className="btn btn-green">
            Все варианты
          </a>
        </div>
      </section>

      <section className="advantages dark-sektion">
        <div className="container">
          <Advantages />
        </div>
      </section>
    </>
  );
}

export default Maine;
