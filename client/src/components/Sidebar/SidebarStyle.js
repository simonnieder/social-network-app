import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100vh",
    background: theme.palette.primary.main,
    color: "white",
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    margin: "1.5rem 0",
  },
  isActive: {
    textDecoration: "underline",
  },
  login: {
    color: theme.palette.primary.main,
    background: "white",
  },
  links: {
    marginTop: "1rem",
  },
}));
