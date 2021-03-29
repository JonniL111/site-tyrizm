import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

export const GlobalData = React.createContext();

function WithGlobal({ children }) {
  const dispatch = useDispatch();
  const db = firebase.database();
  const {
    user: { options },
    filtersOptions: { curentFilters },
  } = useSelector((state) => state);

  return <GlobalData.Provider value={{ dispatch, db, options, curentFilters }}>{children}</GlobalData.Provider>;
}

export default WithGlobal;
