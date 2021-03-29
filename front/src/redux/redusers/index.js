import { combineReducers } from 'redux';

import { categorys } from './categorys';
import { mainSlider } from './sliders';
import { productsList } from './products';
import { user } from './user';
import { filtersOptions } from './filters';

const rootReducer = combineReducers({
  filtersOptions,
  categorys,
  mainSlider,
  productsList,
  user,
});
export default rootReducer;
