import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      fontSize: ".7em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      fontSize: ".8125em",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
