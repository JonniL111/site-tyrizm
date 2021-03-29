import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { goToPage } from '../../../utils';
import Thumb from './Thumb';
import { GlobalData } from '../../hoc/withGlobal';
import { EmptyProductList } from '../../errors';

function Thumbnails({ products = [], thumbClass, blockTitle }) {
  const {
    options: { mainUrl },
  } = useContext(GlobalData);

  let history = useHistory();

  const goToProduct = (urlPath) => {
    goToPage({ urlPath, history });
  };

  const show = !products.length ? (
    <EmptyProductList />
  ) : (
    <>
      <Thumb thumbnails={products} {...{ goToProduct, thumbClass, mainUrl }} />
    </>
  );

  return (
    <div className="section-wrapper">
      <h2 className="section-title line">{blockTitle}</h2>
      {show}
    </div>
  );
}

export default Thumbnails;

Thumbnails.propType = {
  products: PropTypes.array,
  thumbClass: PropTypes.string,
};
