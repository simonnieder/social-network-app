import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
  palette: {
    color: {
      gray: "rgba(0,0,0,0.54)",
    },
    //#f1f2f6
    background: {
      gray: "#f1f2f6",
    },
    //#00b894
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
      fontSize: "1em",
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
    width: "700px",
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
    ["@media only screen and (max-width: 400px)"]: {
      width: "280px",
      fontSize: "1em",
    },
    padding: "1.5em",
    color: "black",
    margin: "1rem",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "5px 5px 13px rgba(0,0,0, 0.18)",
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
      fontSize: "1em",
    },
  },
});
