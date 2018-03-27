import React from "react";
import {shallow} from "enzyme";
import {MainLayout} from "../components/mainLayout";

describe("MainLayout Component", () => {

    it.skip("Renders <MainLayout /> without crashing", () => {
        const wrapper = shallow(<MainLayout />);
        expect(wrapper).toBeDefined(); 
    });
    
});