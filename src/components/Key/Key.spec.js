import React from 'react';
import { shallow } from 'enzyme';
import Key from '../Key';

describe("Key", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(
        <Key
            keyAction={jest.fn()}
            keyType={""}
            keyValue={""}
        />
    ));

    //generic test of snapshot
    it("should render correctly", () => expect(wrapper).toMatchSnapshot());

    //test component renders a <div />
    it("should render a <div />", () => {
        expect(wrapper.find("div").length).toEqual(1);
    });

    //test component renders its content properly
    it("should render the value of keyValue", () => {
        wrapper.setProps({ keyValue: "test" });
        expect(wrapper.find(".key-content").text()).toEqual("test");
    });

});
