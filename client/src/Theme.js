import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
export default createMuiTheme({
  palette: {
    background: {
      gray: "#f1f2f6",
    },
    primary: {
      main: "#00b894",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2ed573",
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "4em",
    },
    body1: {
      fontFamily: "Hind Madurai",
      fontSize: "1.25em",
    },
    button: {
      fontColor: "#ffffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
