import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2em",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5em",
    },
  },
  button: {
    color: "white",
    borderColor: "white",
    fontSize: "1.25em",
  },
  icon: {
    fontSize: "2rem",
  },
}));
