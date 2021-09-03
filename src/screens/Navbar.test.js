import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Navbar from "./Navbar";

Enzyme.configure({ adapter: new Adapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders the navbar brand", () => {
  const wrapper = shallow(<Navbar />);
  const navbarDisplay = findByTestAttr(wrapper, "navbar-brand");
  expect(navbarDisplay.length).toBe(1);
});
