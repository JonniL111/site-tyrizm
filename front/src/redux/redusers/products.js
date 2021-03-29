import produce from 'immer';
import {
  GET_PRODUCTS,
  LOAD_PRODUCTS,
  GET_POPULAR,
  DELETE_PRODUCTS,
  GET_PRODUCT,
} from '../variables.js';

const initialState = {
  products: {
    list: [],

    pages: null,
    onPage: 6,
    curentPage: 0,
  },
  curentProduct: null,
  popularProducts: [],
  isLoaded: false,
};

export const productsList = produce((draft, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      draft.products.list.push(...action.payload.list);
      draft.products.pages = action.payload.pages;
      draft.products.curentPage = action.payload.page;
      draft.isLoaded = false;
      break;

    case DELETE_PRODUCTS:
      draft.products.list.splice(0);
      draft.products.pages = null;
      draft.products.curentPage = 0;
      break;

    case GET_POPULAR:
      draft.popularProducts.push(...action.payload);
      draft.isLoaded = false;
      break;

    case GET_PRODUCT:
      draft.curentProduct = action.payload.product;
      draft.isLoaded = false;
      break;

    case LOAD_PRODUCTS:
      draft.isLoaded = true;
      break;

    default:
      break;
  }
}, initialState);
