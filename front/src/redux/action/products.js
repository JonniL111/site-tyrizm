import { products } from '../../api';
import {
  GET_PRODUCTS,
  LOAD_PRODUCTS,
  GET_POPULAR,
  DELETE_PRODUCTS,
  GET_PRODUCT,
} from '../variables.js';

export const addProducts = (data) => ({
  type: GET_PRODUCTS,
  payload: data,
});

export const addPopular = (data) => ({
  type: GET_POPULAR,
  payload: data,
});

export const addProduct = (data) => ({
  type: GET_PRODUCT,
  payload: data,
});

export const cleeningProducts = {
  type: DELETE_PRODUCTS,
};

export const loadProducts = {
  type: LOAD_PRODUCTS,
};

export const fetchProducts = (options) => (dispatch) => {
  dispatch(loadProducts);
  products
    .getProducts({ params: options })
    .then((res) => dispatch(addProducts({ ...res.data, page: options.page })))
    .catch((error) => console.log(`Fetch products error - ${error}`));
};

export const fetchPopularProducts = (options) => (dispatch) => {
  dispatch(loadProducts);
  products
    .getPopular({ params: { ...options } })
    .then((res) => dispatch(addPopular(res.data)))
    .catch((error) => console.log(`Fetch popular products error - ${error}`));
};

export const fetchProduct = (options) => (dispatch) => {
  dispatch(loadProducts);
  products
    .getProduct({ params: options })
    .then((res) => dispatch(addProduct(res.data)))
    .catch((error) => console.log(`Fetch product error - ${error}`));
};
