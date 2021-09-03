import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Button, ButtonGroup, Grid, Box } from "@material-ui/core";

class Categories extends Component {
  render() {
    return (
      <Container maxWidth="md" data-test="component-categories">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box my={5}>
              <ButtonGroup color="primary" data-test="filter-button-container">
                {this.props.categoryList.map((category, index) => (
                  <Button
                    key={index}
                    onClick={() => this.props.filterCategory(category)}
                    data-test="filter-button"
                    className="filter-button-test"
                  >
                    {category}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Categories.propTypes = {
  filterCategory: PropTypes.func.isRequired,
  categoryList: PropTypes.array.isRequired,
};
export default Categories;
