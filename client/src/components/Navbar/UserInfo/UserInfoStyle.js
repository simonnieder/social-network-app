import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  options: {
    padding: "0.25rem 0.5rem",
    display: "flex",
    alignItems: "space-around",
    bottom: "0",
    left: "0",
    boxSizing: "default",
    "& *": {
      fontSize: "1.75rem",
    },
    color: "inherit",
    background: theme.palette.primary.main,
    border: "none",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  profile: {
    overflow: "hidden",
    padding: "0",
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.54)",
    display: "flex",
    alignItems: "center",
    "& >*": {
      marginRight: "1rem",
    },
  },
}));
