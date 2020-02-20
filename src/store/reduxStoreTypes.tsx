import { Product } from "../containers/Product/ProductTypes";

export interface CartState {
    total: number,
    products: Product[]
};

export interface ReduxState {
    cart: CartState
};