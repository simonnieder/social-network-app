import { createMuiTheme } from "@material-ui/core/styles";
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
    h2: {
      fontSize: "3em",
    },
    h3: {
      fontSize: "2.5em",
    },
    h4: {
      fontWeight: "500",
      fontSize: "2em",
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
  card: {
    width: "900px",
    fontSize: "1.25em",
    ["@media only screen and (max-width: 1280px)"]: {
      width: "700px",
    },
    ["@media only screen and (max-width: 960px)"]: {
      width: "500px",
      fontSize: "1.125em",
    },
    ["@media only screen and (max-width: 600px)"]: {
      width: "350px",
      fontSize: "1em",
    },
    padding: "1.5em",
    color: "black",
    margin: "1rem",
  },
  header: {
    fontSize: "1.25em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem 5rem",
    color: "#393939",
    ["@media only screen and (max-width: 960px)"]: {
      flexDirection: "column",
      fontSize: "1.125em",
      padding: "2rem 1rem",
    },
    ["@media only screen and (max-width: 600px)"]: {
      // width: "350px",
      fontSize: "1em",
    },
  },
});
