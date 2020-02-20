import {
    Product,
    UpdateProduct
} from '../containers/Product/ProductTypes';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

interface AddProductActionType {
    type: typeof ADD_PRODUCT,
    payload: Product
};

interface UpdateProductActionType {
    type: typeof UPDATE_PRODUCT,
    payload: UpdateProduct
};

interface ClearCartActionType {
    type: typeof CLEAR_CART
};

export type CartActionTypes = AddProductActionType | ClearCartActionType | UpdateProductActionType;