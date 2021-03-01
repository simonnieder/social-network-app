import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  options: {
    display: "flex",
    position: "absolute",
    margin: "1rem",
    top: "0",
    right: "0",
    "& *": {
      fontSize: "1.75rem",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& >*": {
      marginRight: ".25rem",
    },
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    "& *": {
      fontSize: "1.25rem",
    },
  },
}));
