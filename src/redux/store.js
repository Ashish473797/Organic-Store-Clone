import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import siteReducer from './reducers/siteReducer';

const rootReducer = combineReducers({
  productData: productReducer,
  siteData: siteReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
