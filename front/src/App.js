import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HandlerToken } from './components/handlerToken';
import { GlobalData } from './components/hoc/withGlobal';
import { fetchCategorys } from './redux/action/categorys';
import { Main, Catalog, Single, Error } from './pages/index';
import { loginUser, logoutUser, fetchOptions } from './redux/action/user';

import './App.css';
import 'swiper/swiper-bundle.min.css';
import { fetchFilters } from './redux/action/filters';

function App() {
  const { dispatch } = useContext(GlobalData);

  useEffect(() => {
    dispatch(fetchCategorys());
    dispatch(fetchFilters());
    dispatch(fetchOptions());
  }, []);

  return (
    <>
      <HandlerToken />
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/catalog/:src" component={Single} />
        <Route path="/catalog/?page=id" component={Catalog} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/login" component={LoginPage} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
