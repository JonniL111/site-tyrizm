import { categorys } from '../../api';
import { GET_CATEGORYS } from '../variables';

export const addCategorys = (data) => ({
  type: GET_CATEGORYS,
  payload: data,
});

export const fetchCategorys = () => (dispatch) => {
  categorys
  .getCategorys()
  .then((res)=>dispatch(addCategorys(res.data)))
  .catch((err)=> console.log(`Error - categorys ${err}`))
};
