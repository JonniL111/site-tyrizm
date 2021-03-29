import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components/sidebar';
import { SliderThumbs } from '../components/sliders';
import { Breadcrumbs } from '../components/breadcrumbs';
import { sellers } from '../assets/faikeData';
import { CallBack, ControlButtons, Map } from '../components/widgets';
import { Section, SellerInfo, Table, TopBanner } from '../components/sections';
import { GlobalData } from '../components/hoc/withGlobal';
import { fetchProduct } from '../redux/action/products';

function Single({ match, location }) {
  const product = useSelector((state) => state.productsList.curentProduct);

  const {
    options: { mainUrl },
    dispatch,
  } = useContext(GlobalData);
  useEffect(() => {
    dispatch(fetchProduct({src : match.params.src}));
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {product && (
        <>
          <section
            className="banner-section single-page"
            style={{ backgroundImage: `url(${mainUrl}images/dist/elements-2.jpg)` }}>
            <div className="container">
              <TopBanner location={location} title={product.title}>
                <Breadcrumbs {...{ match, title: product.title }} />
              </TopBanner>
            </div>
          </section>

          <section className="short-data">
            <div className="container">
              <SellerInfo seller={sellers} />
            </div>
          </section>

          <section className="catalog-section">
            <div className="container">
              <div className="section-wrapper">
                <div className="row">
                  <div className="col-sm-12 col-md-9">
                    <main className="product">
                      <div className="product__slider">
                        <SliderThumbs slides={product.img} />
                      </div>

                      <Section title={'Параметры'}>
                        <Table params={product.params} />
                      </Section>

                      <Section title={'Описание'}>
                        <div className="product_text">{product.description}</div>
                      </Section>
                    </main>
                  </div>

                  <Sidebar>
                    <Map title="Карта" />
                    <ControlButtons title="" />
                    <CallBack title="Отправить запрос" />
                  </Sidebar>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Single;
