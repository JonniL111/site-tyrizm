import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './App';
import store from './redux/store';
import './template/scss/main.scss';
import WithGlobal from './components/hoc/withGlobal';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <WithGlobal>
        <App />
      </WithGlobal>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
