import React, { Component } from "react";
import menuItemsData from "./data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import Navbar from "./screens/Navbar";

const allCategories = [
  "all",
  ...new Set(menuItemsData.map((item) => item.category)),
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menuItemsData,
      categories: allCategories,
    };
  }

  filterItems = (category) => {
    if (category === "all") {
      return this.setState({ menuItems: menuItemsData });
    }
    const newMenuItems = menuItemsData.filter(
      (item) => item.category === category
    );

    this.setState({ menuItems: newMenuItems });
  };
  render() {
    return (
      <div data-test="component-app">
        <Navbar />
        <Categories
          categoryList={this.state.categories}
          filterCategory={this.filterItems}
        />
        <Menu menuItems={this.state.menuItems} />
      </div>
    );
  }
}

export default App;
