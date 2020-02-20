import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount, ReactWrapper } from 'enzyme';

import Product from './Product';
import { ProductProps } from './ProductTypes';

const mockStore = configureStore();

const product: ProductProps = {
    id: 1,
    imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
    name: 'Modelo Negra',
    pack: 12,
    size: '33oz',
    description: 'Bottle',
    price: '32.00',
    returnable: false,
    promo: 'Buy 3, get 1 free.'
}

describe('<Product />', () => {
    let wrapper: ReactWrapper<React.Component>;
    beforeEach(() => {
        const initialState = {
            cart: {
                total: 0,
                products: []
            }
        };
        const store = mockStore(initialState);

        wrapper = mount(
            <Provider store={store}>
                <Product product={product} />
            </Provider>
        );
    });

    it('should render one <Product />', () => {
        expect(wrapper.find('.Product')).toHaveLength(1);
    });

    it('should increase product quantity', () => {
        wrapper.find('.add').at(1).simulate('click');
        expect(wrapper.find('.productQuantity').props().value).toEqual(1);
    });

    it('should decrease product quantity', () => {
        wrapper.find('.add').at(1).simulate('click');
        wrapper.find('.add').at(1).simulate('click');
        wrapper.find('.remove').at(1).simulate('click');
        expect(wrapper.find('.productQuantity').props().value).toEqual(1);
    });

    it('should not decrease product quantity to less than 0', () => {
        wrapper.find('.remove').at(1).simulate('click');
        expect(wrapper.find('.productQuantity').props().value).toEqual(0);
    });

});