import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    height: "100vh",
    flex: "1",
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
    ...theme.card,
    padding: "3rem",
    maxWidth: "700px",
  },
  signUpLink: {
    color: "#3498db",
  },
}));
