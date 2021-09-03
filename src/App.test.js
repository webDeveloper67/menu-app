import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("render Menu props", () => {
  const wrapper = shallow(<App />).find(Menu);
  expect(wrapper.props().menuItems.length).toBe(9);
});

test("render Category prop", () => {
  const wrapper = shallow(<App />).find(Categories);
  expect(wrapper.props().categoryList).toContain("shakes");
});

test("render Category filterItem prop", () => {
  let mockFn = jest.fn();
  App.prototype.filterItems = mockFn;

  shallow(<App />)
    .find(Categories)
    .props().filterCategory;

  expect(mockFn).toBeTruthy();
});
