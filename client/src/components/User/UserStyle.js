import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: "20px",
    boxShadow: "5px 5px 13px rgba(0,0,0, 0.18)",
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
