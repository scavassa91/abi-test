import {
    EDIT_PRODUCT_REG,
    productActionTypes
} from './productActionsTypes';
import { Product } from '../containers/Product/ProductTypes';

export function editProductRegAction(product: Product): productActionTypes {
    return {
        type: EDIT_PRODUCT_REG,
        payload: product
    };
};
