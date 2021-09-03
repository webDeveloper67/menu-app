import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Menu from "./Menu";

Enzyme.configure({ adapter: new Adapter() });

const MenuProps = {
  menuItems: [],
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  const wrapper = shallow(<Menu {...MenuProps} />);
  const menuComponent = findByTestAttr(wrapper, "component-menu");
  expect(menuComponent.length).toBe(1);
});
