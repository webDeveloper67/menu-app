import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiCardMedia: {
      root: {
        height: 0,
        paddingTop: "56%",
      },
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    primary: {
      light: "#ffac33",
      main: "#ff9800",
      dark: "#b26a00",
      contrastText: "#000",
    },
    secondary: {
      light: "#33eaff",
      main: "#00e5ff",
      dark: "#00a0b2",
      contrastText: "#000",
    },
  },
});

export default theme;
