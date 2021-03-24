import React from "react";
import SimpleTestCase from "../testComponents/SimpleTestCase";

import { shallow } from "enzyme";

it("should have H1 Element", () => {
    var inMemoryomponent = shallow(<SimpleTestCase></SimpleTestCase>);
    expect(inMemoryomponent.find("h1").length).toBe(1);
})

it("should not have H2 Element", () => {
    var inMemoryomponent = shallow(<SimpleTestCase></SimpleTestCase>);
    expect(inMemoryomponent.find("h2").length).toBe(0);
})

it("should not text equal to 'This is Sample Data....'", () => {
    var inMemoryomponent = shallow(<SimpleTestCase></SimpleTestCase>);
    expect(inMemoryomponent.find("h1").text().length).toBeGreaterThan(1)
})

it("should render props value", () => {
    var inMemoryObject = shallow(<SimpleTestCase userName='Mayank'></SimpleTestCase>)
    expect(inMemoryObject.find("h1").text().indexOf("Mayank")).toBeGreaterThan(0);
})

it("should render 2 Employee in the list", () => {
    var inMemoryObject = shallow(<SimpleTestCase userName='Mayank'></SimpleTestCase>)
    expect(inMemoryObject.find("h3").length).toBe(2);
})