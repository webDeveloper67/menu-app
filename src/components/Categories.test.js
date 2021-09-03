import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Categories from "./Categories";

Enzyme.configure({ adapter: new Adapter() });

const CategoryProps = {
  categoryList: [],
  filterCategory: jest.fn(() => {}),
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  const wrapper = shallow(<Categories {...CategoryProps} />);
  const appComponent = findByTestAttr(wrapper, "component-categories");
  expect(appComponent.length).toBe(1);
});

test("filtering the list of menus", () => {
  const wrapper = shallow(<Categories {...CategoryProps} />);

  const buttonClick = wrapper
    .find("[data-test='filter-button']")
    .forEach((node) => {
      if (node.hasClass("filter-button-test").toEqual(true)) {
        buttonClick.simulate("click");

        expect(CategoryProps.filterCategory).toHaveBeenCalled();
      }
    });
});
