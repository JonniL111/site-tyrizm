import makeRequst from '../makeRequest';

export const getOptions = (data) => {
  return makeRequst({
    url: '/api/options',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  })
}