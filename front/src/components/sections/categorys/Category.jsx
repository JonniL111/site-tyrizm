import React from 'react';
import { Link } from 'react-router-dom';

function Category({ categorys, addFilter, curentFilters }) {

  const categorysList = categorys.map(({ id, img, title, data }) => {
    const link = `/catalog?page=0`;

    return (
      <div className="col-12 col-sm-6" key={title}>
        <div className="category">
          <Link
            to={link}
            onClick={() => addFilter({ category: id })}
            className="category__link pointer">
            <img src={img} alt={title} className="category__img" />
            <div className="category__description">
              <h4 className="category__description-title">{title}</h4>
              <span className="category__description-properties">{data}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <>{categorysList}</>;
}

export default Category;
