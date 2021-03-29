import React from 'react';
import { GoToPage } from '../buttons';

function EmptyProductList() {
  return (
    <div className="col-12 col-md-6 offset-3 text-center">
      <span className="error-message">По вашему запросу ничего не найдено</span>
    </div>
  );
}

/* <GoToPage text={'К catalogу'} path={'/catalog'} /> */

export default EmptyProductList;
