import React from "react";
import {shallow} from "enzyme";
import { MemoryRouter } from "react-router";
import MainLayout from "../components/mainLayout";
import notFound from "../components/notFound";
import App from "../components/App";

describe("App Component", () => {

    it("Renders <App /> without crashing", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeDefined(); 
    });    

    it.skip("Invalid path should redirect to 404", () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={[ "/random" ]}>
                <App/>
            </MemoryRouter>
        );
        expect(wrapper.find(MainLayout)).toHaveLength(0);
        expect(wrapper.find(notFound)).toHaveLength(1);
    });
      
    it.skip("Valid path should not redirect to 404", () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={[ "/" ]}>
                <App/>
            </MemoryRouter>
        );
        expect(wrapper.find(MainLayout)).toHaveLength(1);
        expect(wrapper.find(notFound)).toHaveLength(0);
    });
});