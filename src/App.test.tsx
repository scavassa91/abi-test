import React from 'react';

import { shallow, ShallowWrapper} from 'enzyme';

import App from './App';
import Product from './containers/Product/Product';

describe('<App />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render the <App />', () => {
        expect(wrapper.find('.App')).toHaveLength(1);
    });

    it('should render all products', () => {
        expect(wrapper.find(Product)).toHaveLength(4);
    });

});