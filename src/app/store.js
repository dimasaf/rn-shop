import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import productReducer from '../features/Products/reducer';
import cartReducer from '../features/Cart/reducer';
import orderReducer from '../features/Order/reducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
