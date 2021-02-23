import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
export default createMuiTheme({
  palette: {
    background: {
      gray: "#DFE4EA",
    },
    primary: {
      main: "#1e90ff",
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