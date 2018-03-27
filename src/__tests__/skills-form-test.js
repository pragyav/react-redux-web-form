import React from "react";
import {shallow} from "enzyme";
import {SkillsForm} from "../components/skills-form";

describe("SkillsForm Component", () => {

    it("Renders <SkillsForm /> without crashing", () => {
        const wrapper = shallow(<SkillsForm />);
        expect(wrapper).toBeDefined(); 
    });

    it("SkillsForm clicks button", () => {
        const handleSubmit = jest.fn();       
        const wrapper = shallow(<SkillsForm handleSubmit = {handleSubmit} />);                     
        wrapper.find("form").simulate("submit");        
        expect(handleSubmit).toHaveBeenCalled();
    });

});

