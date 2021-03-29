import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThunkMiddleware from 'redux-thunk';

import rootReducer from './redusers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

export default store;
