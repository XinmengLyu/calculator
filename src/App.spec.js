import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from './components/Calculator';

describe("App", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    //generic test of a snapshot
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot()
    });

    //test if the component is a <div>
    it("should render a <div />", () => {
        expect(wrapper.find("div").length).toEqual(1);
    });

    //test if the component contains <Calculator>
    it('should contain a Calculator component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    });
});
