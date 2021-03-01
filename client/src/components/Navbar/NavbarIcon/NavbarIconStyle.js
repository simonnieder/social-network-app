import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#005141",
    fontSize: "2.5em",
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
  },
  active: {
    borderColor: "white",
    color: "white",
  },
}));
