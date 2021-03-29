import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNav() {
  return (
    <div className="navbar-nav">
      <ul className="navbar-nav__list">
        <li className="navbar-nav__item">
          <NavLink to="/" exact>
            Главная
          </NavLink>
        </li>
        <li className="navbar-nav__item">
          <NavLink to="/catalog?page=0">Каталог</NavLink>
        </li>
        <li className="navbar-nav__item">Контакты</li>
      </ul>
    </div>
  );
}

export default TopNav;
