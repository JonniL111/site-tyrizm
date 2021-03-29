import React from 'react';
import { NavLink } from 'react-router-dom';

function Breadcrumbs({ match, title }) {
  let url = match.path;
  if (url.slice(0, 1) === '/') url = url.slice(1);
  url = url.split('/');
  const crumbs = url.map((item, idx) => {
    return (
      <li className="breadcrumbs__item" key={item}>
        {url.length === idx + 1 ? (
          <span>{title || item}</span>
        ) : (
          <NavLink to={`/${item}`} className="breadcrumbs__link">
            {item}
          </NavLink>
        )}
      </li>
    );
  });

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list ">
        <li className="breadcrumbs__item">
          <NavLink to="/" className="breadcrumbs__link">
            Главная
          </NavLink>
        </li>
        {crumbs}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
