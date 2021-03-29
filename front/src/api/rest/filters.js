import makeRequst from '../makeRequest';

export const getFilters = (data) => {
  return makeRequst({
    url: '/api/filters',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  })
}