import { Product } from "../containers/Product/ProductTypes";

export const EDIT_PRODUCT_REG = 'EDIT_PRODUCT_REG';

interface EditProducRegActionType {
    type: typeof EDIT_PRODUCT_REG,
    payload: Product
};

export type productActionTypes = EditProducRegActionType;
