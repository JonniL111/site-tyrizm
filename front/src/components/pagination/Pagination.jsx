import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PagesOptions } from '../../pages/Catalog';

function Pagination() {  
  let pag = [];
  const { curentPage, pages, onPage } = useContext(PagesOptions);
  if (pages < 1 ) return null
  for (let i = 0; i <= pages; i++) {
    pag.push(
      <Link
        to={`/catalog?page=${i}`}
        className={`pagination__list-item ${curentPage === i ? 'active' : null}`}
        key={i}>
        {i + 1}
      </Link>,
    );
  }
  return (
    <div className="pagination">
      <div className="pagination__list">{pag}</div>
    </div>
  );
}

export default Pagination;
