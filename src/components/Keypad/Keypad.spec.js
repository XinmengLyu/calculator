import React from 'react';
import { shallow, mount } from 'enzyme';
import Keypad from '../Keypad';

describe("Keypad", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(
        <Keypad
            callOperator={jest.fn()}
            numbers={[]}
            operators={[]}
            setOperator={jest.fn()}
            updateDisplay={jest.fn()}
        />
    ));

    //test component renders correctly
    it("should render correctly", () => expect(wrapper).toMatchSnapshot());

    //test component renders a <div />
    it("should render a <div />", () => {
        expect(wrapper.find("div").length).toEqual(4);
    });

    //text component renders keys properly
    it("should render an instance of the Key component for each index of numbers, operators, and the submit Key", () => {
        const numbers = ["0", "1"];
        const operators = ["+", "-"];
        const submit = 1;
        const keyTotal = numbers.length + operators.length + submit;
        wrapper.setProps({numbers, operators});
        expect(wrapper.find('Key').length).toEqual(keyTotal);
    });
});

describe("mounted Keypad", () => {
    let wrapper;
    beforeEach(() => wrapper = mount(
        <Keypad 
            callOperator={jest.fn()}
            numbers={[]}
            operators={[]}
            setOperator={jest.fn()}
            updateDisplay={jest.fn()}
        />
    ));

    //test component renders numbers properly
    it("should render the values of numbers", () => {
        wrapper.setProps({ numbers: ["0", "1", "2", "3"] });
        expect(wrapper.find(".numbers-container").text()).toEqual("0123");
    });

    //test component renders operators properly
    it("should render the values of operator", () => {
        wrapper.setProps({ operators: ["+", "-", "*", "/"]});
        expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
    });
});
