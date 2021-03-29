import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const GlobalData = React.createContext();

function WithGlobal({ children }) {
  const dispatch = useDispatch();
  const {
    user: { options },
    filtersOptions: { curentFilters },
  } = useSelector((state) => state);

  return <GlobalData.Provider value={{ dispatch, options, curentFilters }}>{children}</GlobalData.Provider>;
}

export default WithGlobal;
