import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    maxHeight: "100vh",
    background: theme.palette.background.gray,
  },
  form: {
    "& >*": {
      fontSize: "1.25rem",
    },
  },
  password: {
    marginBottom: "1rem",
  },
  paper: {
    padding: "2rem",
    width: "500px",
  },
  signUpLink: {
    color: "#3498db",
  },
}));
