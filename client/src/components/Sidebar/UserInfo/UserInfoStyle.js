import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  options: {
    padding: "0.25rem 0.5rem",
    display: "flex",
    alignItems: "space-around",
    margin: "1rem",
    bottom: "0",
    left: "0",
    width: "80%",
    boxSizing: "default",
    "& *": {
      fontSize: "1.75rem",
    },
    color: "inherit",
    background: theme.palette.primary.main,
    border: "none",
  },
  profile: {
    overflow: "hidden",
    padding: "0",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    "& >*": {
      marginRight: ".25rem",
    },
  },
  icon: {
    color: "white",
  },
}));
