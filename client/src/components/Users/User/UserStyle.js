import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    width: "500px",
    margin: "1rem",
  },
  namesection: {
    display: "flex",
    alignItems: "center",
    "&>h4": {
      marginLeft: ".5rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
