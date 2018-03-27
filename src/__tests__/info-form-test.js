import React from "react";
import {shallow} from "enzyme";
import {InfoForm} from "../components/info-form";

describe("InfoForm Component", () => {

    it("Renders <InfoForm /> without crashing", () => {
        const wrapper = shallow(<InfoForm />);
        expect(wrapper).toBeDefined(); 
    });   

    it("InfoForm clicks button", () => {
        const handleSubmit = jest.fn();       
        const wrapper = shallow(<InfoForm handleSubmit = { handleSubmit } />);                     
        wrapper.find("form").simulate("submit");        
        expect(handleSubmit).toHaveBeenCalled();
    });
    
});

