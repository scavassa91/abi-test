import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    CLEAR_CART,
    CartActionTypes,
} from './cartActionsTypes';
import { Product, UpdateProduct } from '../containers/Product/ProductTypes';

export function addProductAction(product: Product): CartActionTypes {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

export function updateProductAction(productToUpdate: UpdateProduct): CartActionTypes {
    return {
        type: UPDATE_PRODUCT,
        payload: productToUpdate
    };
};

export function clearCartAction(): CartActionTypes {
    return {
        type: CLEAR_CART
    };
};