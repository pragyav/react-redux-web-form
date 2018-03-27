import React from "react";
import {shallow} from "enzyme";
import Header from "../components/header";

const mockT = (key, options) => (key);

jest.mock("react-i18next", () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    translate: () => Component => props => <Component t={() => ""} {...props} />,
}));

describe("Header Component", () => {   

    it("Renders <Header /> without crashing", () => {
        const wrapper = shallow(<Header t={mockT}/>);
        expect(wrapper).toBeDefined(); 
    });

    it.skip(" Header clicks link", () => {
        const handleChange = jest.fn();             
        const wrapper = shallow(<Header handleChange = {handleChange} />);                
        expect(wrapper.find("I18n").dive().find("select")).toBeDefined(); 
        wrapper.find("select").simulate("change", { target: { value: "en" } });
        expect(handleChange.mock.calls[0][0].value).toEqual("en");
    });

});