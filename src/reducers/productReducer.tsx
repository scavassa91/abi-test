import {
    EDIT_PRODUCT_REG, productActionTypes
} from '../actions/productActionsTypes';
import { ProductProps } from '../containers/Product/ProductTypes';

const productsInitialState: ProductProps[] = [
    {
        id: 1,
        imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
        name: 'Modelo Negra',
        pack: 12,
        size: '33oz',
        description: 'Bottle',
        price: '32.00',
        returnable: false,
        promo: 'Buy 3, get 1 free.'
    },
    {
        id: 2,
        imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
        name: 'Presidente Light',
        pack: 16,
        size: '300ml',
        description: 'Bottle',
        price: '43.00',
        returnable: true,
        promo: 'Buy 3, get 1 free Red Bull or 2 Pepsi Black.'
    },
    {
        id: 3,
        imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
        name: 'Brahma Light very very light 33 Onz - Caja [12 Botellas]',
        pack: 16,
        size: '300ml',
        description: 'Bottle',
        price: '43.00',
        returnable: true,
        promo: 'For every 5 you buy, get up to 2 free.'
    },
    {
        id: 4,
        imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
        name: 'Budweiser',
        pack: 16,
        size: '300ml',
        description: 'Bottle and extra long summary on multiple lines',
        price: '26.00',
        returnable: true,
        promo: 'For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.'
    }
]; 

export function productReducer (state = productsInitialState, action: productActionTypes): ProductProps[] {
    switch (action.type) {
        case EDIT_PRODUCT_REG:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product;
            });
        default:
            return state;
    };
};