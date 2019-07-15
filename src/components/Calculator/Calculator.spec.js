import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../Calculator';
import Display from '../Display';
import Keypad from '../Keypad';

describe("Calculator", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator />));

    //test calculator is a <div>
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    //test calculator renders a Display and a keypad
    it('should contains the Display component', () => {
        expect(wrapper.containsAllMatchingElements(
            [<Display displayValue={wrapper.instance().state.displayValue} />,
            <Keypad
                callOperator={wrapper.instance().callOperator}
                numbers={wrapper.instance().state.numbers}
                operators={wrapper.instance().state.operators}
                setOperator={wrapper.instance().setOperator}
                updateDisplay={wrapper.instance().updateDisplay}
            />]
        )).toEqual(true);
    });
})
