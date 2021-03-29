import produce from 'immer';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_BREAD_CRUMBS,
  CLEEN_BREAD_CRUMBS,
  SET_OPTIONS,
} from '../variables';

const initialState = {
  userInfo: {},
  isLogin: false,
  breadCrumbs: null,
  options: { mainUrl: null },
  token: '',
};

export const user = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_USER:
      draft.userInfo = action.payload;
      draft.isLogin = true;
      break;

    case LOGOUT_USER:
      draft.userInfo = '';
      draft.isLogin = false;
      break;

    case SET_BREAD_CRUMBS:
      draft.breadCrumbs = action.payload;
      break;

    case CLEEN_BREAD_CRUMBS:
      draft.breadCrumbs = null;
      break;

    case SET_OPTIONS:
      draft.options = action.payload;
      break;

    default:
      break;
  }
}, initialState);
