import React from "react";
import {shallow} from "enzyme";
import {PortfolioForm} from "../components/portfolio-form";

describe("PortfolioForm Component", () => {

    it("Renders <PortfolioForm /> without crashing", () => {
        const wrapper = shallow(<PortfolioForm />);
        expect(wrapper).toBeDefined(); 
    });
    
    it("PortfolioForm clicks button", () => {
        const handleSubmit = jest.fn();       
        const wrapper = shallow(<PortfolioForm handleSubmit = { handleSubmit } />);                     
        wrapper.find("form").simulate("submit");        
        expect(handleSubmit).toHaveBeenCalled();
    });

});