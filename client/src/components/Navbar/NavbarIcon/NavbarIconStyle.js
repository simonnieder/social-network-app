import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.color.gray,
    fontSize: "3em",
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderBottom: "5px solid transparent",
    transition: "all .2s ease",
    "&:hover": {
      color: "white",
      borderColor: "white",
    },
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  active: {
    borderColor: "white",
    color: "white",
  },
}));
