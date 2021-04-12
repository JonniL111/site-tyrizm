import produce from 'immer';
import { GET_FILTERS, SET_CURENT_FILTERS } from '../variables';

const initialState = {
  filters: [],
  curentFilters: {},
};

export const filtersOptions = produce((draft, action) => {
  switch (action.type) {
    case GET_FILTERS:
      draft.filters = action.payload;
      break;

    case SET_CURENT_FILTERS:
      for (const key in action.payload) {
        if (action.payload[key] === 'false') {
          delete draft.curentFilters[key];
          continue;
        }
        draft.curentFilters[key] = action.payload[key];
      }
      break;

    default:
      break;
  }
}, initialState);
