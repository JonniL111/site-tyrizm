import makeRequst from '../makeRequest';

export const getPopular = (data) => {
  return makeRequst({
    url: '/api/popular',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  });
};

export const getProducts = (data) => {
  return makeRequst({
    url: '/api/products',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  });
};

export const getProduct = (data) => {
  return makeRequst({
    url: '/api/product',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  });
};
