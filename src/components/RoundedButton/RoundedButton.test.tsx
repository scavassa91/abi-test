import React from 'react';

import { ReactWrapper, mount} from 'enzyme';

import RoundedButton from './RoundedButton';

const buttonClicked = jest.fn();

describe('<RoundedButton />', () => {
    let wrapper: ReactWrapper<React.Component>;
    beforeEach(() => {
        wrapper = mount(<RoundedButton label="test" onClick={buttonClicked} />);
    });

    it('should render the <RoundedButton />', () => {
        expect(wrapper.find(RoundedButton)).toHaveLength(1);
    });

    it('should execute onClick function', () => {
        wrapper.simulate('click');
        expect(buttonClicked).toHaveBeenCalled();
    });

});