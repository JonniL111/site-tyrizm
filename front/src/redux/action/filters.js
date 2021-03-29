import { getFilters } from '../../api/rest/filters';
import { GET_FILTERS, SET_CURENT_FILTERS } from '../variables';

export const addFilters = (data) => ({
  type: GET_FILTERS,
  payload: data,
});

export const setCurentFilter = (data) => ({
  type: SET_CURENT_FILTERS,
  payload: data
}) 

export const fetchFilters = () => (dispatch) => {
  getFilters()
    .then((val) => dispatch(addFilters(val.data)))
    .catch((err) => console.log(`Error- fetchFilters ${err}`));
};

