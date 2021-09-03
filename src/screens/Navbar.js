import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Menu</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Navbar;
