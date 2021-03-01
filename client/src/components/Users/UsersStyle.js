import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flex: "1",
    width: "100%",
    overflowY: "auto",
    margin: "0 auto",
    background: theme.palette.background.gray,
  },
  container: {
    padding: "2rem",
    width: "100%",
    alignItems: "center",
  },
  header: {
    display: "flex",
    ...theme.header,
  },
  title: {
    text: "center",
    marginLeft: "1rem",
  },
  nothing: {
    color: "#a4b0be",
    textTransform: "capitalize",
    fontSize: "2em",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
}));
