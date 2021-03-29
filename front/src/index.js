import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';

import App from './App';
import store from './redux/store';
import './template/scss/main.scss';
import WithGlobal from './components/hoc/withGlobal';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyDRyDUx4vVDMccYxUORoKcT9m6ev59Tul4',
  authDomain: 'houses-879a9.firebaseapp.com',
  databaseURL: 'https://houses-879a9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'houses-879a9',
  storageBucket: 'houses-879a9.appspot.com',
  messagingSenderId: '346136753372',
  appId: '1:346136753372:web:3eeaf4a4e2cdc96e5af019',
};
firebase.initializeApp(firebaseConfig);

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
