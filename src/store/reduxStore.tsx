import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../reducers/cartReducer';
import { productReducer } from '../reducers/productReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
});

export const reduxStore = createStore(rootReducer);