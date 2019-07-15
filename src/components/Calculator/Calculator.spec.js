import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../Calculator';
import Display from '../Display';

describe("Calculator", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator />));

    //test calculator is a <div>
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    //test calculator renders a Display
    it('should contains the Display component', () => {
        expect(wrapper.containsMatchingElement(
          <Display displayValue={wrapper.instance().state.displayValue} />
        )).toEqual(true);
    });
})
