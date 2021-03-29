import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DoorOpen, DoorClosed } from 'react-bootstrap-icons';
import { KontactInfo, SocialBtn, TopNav } from './index';
import { logoutUser } from '../../redux/action/user';
import { GlobalData } from '../hoc/withGlobal';

function Header() {
  const { user } = useSelector((state) => state);
  const {dispatch} = useContext(GlobalData)
  const {
    options: { mainUrl },
  } = useContext(GlobalData);


  const logInOut = <span> Туризм сервис </span>
/* 
  const logInOut = !user.isLogin ? (
    <NavLink to="login" className="">
      <DoorOpen />
      <span>Вход/Регистрация</span>
    </NavLink>
  ) : (
    <span className="navbar-toppanel__login-item toppanel-info" onClick={userSignOut}>
      <DoorClosed />
      <span>Выйти</span>
    </span>
  ); */

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-toppanel">
            <div className="navbar-toppanel__login">{logInOut}</div>
            <div className="navbar-toppanel__info">
              <KontactInfo />
            </div>
            <div className="navbar-toppanel__social">
              <SocialBtn />
            </div>
          </div>
          <div className="navbar-inner">
            <div className="navbar-inner__top">
              <a href="/" className="navbar-logo">
                <img src={`${mainUrl}images/src/logo-1.png`} alt="" />
              </a>
              <div className="btn-group">
                <button className="btn btn-orange">Настроить поиск</button>
              </div>
            </div>
            <div className="navbar-inner__bottom">
              <TopNav />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
