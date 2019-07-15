import React from 'react';
import {shallow} from 'enzyme';
import Display from '../Display';

describe("Display", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Display displayValue={""} />));

    //generic test of a snapshot
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    //test Display is a <div>
    it("should render a <div />", () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    //test Display can display properly
    it("should render the value of displayValue", () => {
        wrapper.setProps({displayValue: "test"});
        expect(wrapper.text()).toEqual("test");
    });
});
