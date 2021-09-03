import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Grid,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";

class Menu extends Component {
  render() {
    return (
      <Container maxWidth="md" data-test="component-menu">
        <Grid container spacing={4}>
          {this.props.menuItems.map((menuItem) => {
            const { id, title, img, desc, price } = menuItem;

            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Card>
                  <CardMedia image={img} title={title} />
                  <CardActions>
                    <Button size="small" color="primary">
                      {title}
                    </Button>
                    <Button size="small" color="primary">
                      {price}
                    </Button>
                  </CardActions>
                  <CardContent>
                    <Typography variant="body2" gutterBottom>
                      {desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default Menu;
