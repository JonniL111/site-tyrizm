import makeRequst from '../makeRequest';


export const getCategorys = ( data ) => {
  return makeRequst({
    url: '/api/categorys',
    method: 'GET',
    headers: { authorization: false },
    ...data,
  })
}