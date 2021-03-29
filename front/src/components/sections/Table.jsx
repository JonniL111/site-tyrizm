import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

function Tables({ params }) {
  const { filters } = useSelector((state) => state.filtersOptions);
  const filterName = (id) => {
    const filter = filters.find((item) => item.id === id);
    return filter.title;
  };

  const row = params.map((item, idx) => (
    <div className="params-table__row" key={idx}>
      <div className="params-table__name">{filterName(item.filterId)}</div>
      <div className="params-table__caption">{item.caption}</div>
    </div>
  ));
  return <div className="params-table">{row}</div>;
}

export default Tables;

Tables.propTypes = {
  params: PropTypes.array,
};
