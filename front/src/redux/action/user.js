import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_BREAD_CRUMBS,
  CLEEN_BREAD_CRUMBS,
  SET_OPTIONS,
} from '../variables';

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const logoutUser = {
  type: LOGOUT_USER,
};

export const setBreadCrumbs = (data) => ({
  type: SET_BREAD_CRUMBS,
  payload: data,
});

export const cleenBreadCrumbs = {
  type: CLEEN_BREAD_CRUMBS,
};

export const fetchOptions = (db) => (dispatch) => {
  const options = db.ref('options');
  options.on('value', (options) => dispatch({ type: SET_OPTIONS, payload: options.val() }));
};
