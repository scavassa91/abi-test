import { cartReducer, cartInitialState } from './cartReducer';
import * as cartActions from '../actions/cartActions';
import { Product, UpdateProduct } from '../containers/Product/ProductTypes';

const product: Product = {
    id: 1,
    imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
    name: 'Modelo Negra',
    pack: 12,
    size: '33oz',
    description: 'Bottle',
    price: '32.00',
    returnable: false,
    promo: 'Buy 3, get 1 free.',
    quantity: 1
};

const productToRemove: UpdateProduct = {
    id: 1,
    quantity: 0
};

const productToUpdate: UpdateProduct = {
    id: 1,
    quantity: 2
};

describe('cart reducer', () => {

    it('should clean the cart', () => {
        expect(cartReducer({
            ...cartInitialState,
            total: 32,
            products: [product]
        }, cartActions.clearCartAction())).toEqual(cartInitialState);
    });

    it('should add a product to the cart', () => {
        expect(cartReducer(cartInitialState, cartActions.addProductAction(product))).toEqual({
            ...cartInitialState,
            total: 32,
            products: [product]
        });
    });

    it('should remove a product from the cart and update the cart total', () => {
        expect(cartReducer({
            ...cartInitialState,
            total: 32,
            products: [product]
        }, cartActions.updateProductAction(productToRemove))).toEqual(cartInitialState);
    });

    it('should update the product quantity and the cart total', () => {
        expect(cartReducer({
            ...cartInitialState,
            total: 32,
            products: [product]
        }, cartActions.updateProductAction(productToUpdate))).toEqual({
            ...cartInitialState,
            total: 64,
            products: [{
                ...product,
                quantity: 2
            }]
        });
    });

});