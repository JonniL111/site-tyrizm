import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { productsSlice } from '../../../utils';
import { setCurentFilter } from '../../../redux/action/filters';
import { GlobalData } from '../../hoc/withGlobal';

function Categorys({ blockTitle, categorys }) {
  const { curentFilters, dispatch } = useContext(GlobalData);
  const categoryList = productsSlice(categorys, 0, 4);

  const addFilter = (filter) => {
    dispatch(setCurentFilter(filter));
  };

  return (
    <div className="section-wrapper">
      <h2 className="section-title line">{blockTitle}</h2>
      <div className="row">
        <Category categorys={categoryList} addFilter={addFilter} curentFilters={curentFilters} />
      </div>
    </div>
  );
}

export default Categorys;

Categorys.propTypes = {
  blockTitle: PropTypes.string,
  categorys: PropTypes.array,
};
