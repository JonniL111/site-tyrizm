import makeRequst from '../makeRequest';

export const getSliders = (data) => {
  return makeRequst({
    url: '/api/slider',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  });
};