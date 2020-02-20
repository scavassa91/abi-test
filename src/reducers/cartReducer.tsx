import {
    CartActionTypes,
    ADD_PRODUCT,
    CLEAR_CART,
    UPDATE_PRODUCT
} from "../actions/cartActionsTypes";
import { CartState } from '../store/reduxStoreTypes';


export const cartInitialState: CartState = {
    total: 0,
    products: []
};

export function cartReducer(state = cartInitialState, action: CartActionTypes): CartState {
    switch(action.type) {
        // Add the product into the cart and updates the cart total
        case ADD_PRODUCT:
            return {
                products: state.products.concat(action.payload),
                total: state.total + parseFloat(action.payload.price) * action.payload.quantity
            };
        // Update de product quantity, remove products with '0' quantity
        // and updates the cart total
        case UPDATE_PRODUCT: {
            return {
                products: state.products.map(product => {
                    if (product.id === action.payload.id) {
                        product.quantity = action.payload.quantity;
                    }
                    return product;
                }).filter(product => product.quantity !== 0),
                total: state.products.reduce((total, product) => {
                    return total + product.quantity * parseFloat(product.price)
                }, 0)
            };
        }
        // Clean the cart updating de object with the inicial state
        case CLEAR_CART:
            return cartInitialState;
        default:
            return state;
    };
};