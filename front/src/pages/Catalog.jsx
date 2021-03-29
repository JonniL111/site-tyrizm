import React, { useEffect, useContext, createContext } from 'react';
import { useSelector } from 'react-redux';

import { Map } from '../components/widgets';
import { Filter } from '../components/filter';
import { Sidebar } from '../components/sidebar';
import { Pagination } from '../components/pagination';
import { Breadcrumbs } from '../components/breadcrumbs';
import { GlobalData } from '../components/hoc/withGlobal';
import { Thumbnails, TopBanner } from '../components/sections';
import { cleeningProducts, fetchProducts } from '../redux/action/products';
import regExpSrc from '../utils/regExpSrc';

export const PagesOptions = createContext();

function Catalog(props) {
  const str = props.location.search;
  //из адреса через regExp получаем фильтр и значение
  const page = regExpSrc(str, 'page') || 0;

  const {
    productsList: {
      products: { list, pages, onPage, curentPage },
    },
    categorys,
    filtersOptions: { curentFilters },
    user: { options },
  } = useSelector((state) => state);

  const { dispatch } = useContext(GlobalData);

  //получаем список товаров
  useEffect(() => {
    dispatch(fetchProducts({ page, onPage, curentFilters }));
    return () => dispatch(cleeningProducts);
  }, [page, curentFilters]);

  const { title } = curentFilters.category
    ? categorys.find((cat) => cat.id === curentFilters.category)
    : 'Все предложения';
  return (
    <>
      <section
        className="banner-section"
        style={{ backgroundImage: `url(${options.mainUrl}images/dist/elements-2.jpg)` }}>
        <div className="container">
          <TopBanner>
            <Breadcrumbs match={props.match} />
          </TopBanner>
        </div>
      </section>

      <section className="section-filter">
        <div className="container">
          <Filter />
        </div>
      </section>

      <section className="catalog-section">
        <div className="container">
          <div className="section-wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-9 order-2">
                <div className="row">
                  <PagesOptions.Provider value={{ curentPage, pages, onPage }}>
                    <Thumbnails thumbClass={'col-12 col-sm-6'} blockTitle={title} products={list} />
                    <Pagination str={str} />
                  </PagesOptions.Provider>
                </div>
              </div>
              <Sidebar order={'order-3'}>
                <Map title={'Карта'} />
              </Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
