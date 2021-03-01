import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
    background: theme.palette.background.gray,
    flex: "1",
  },
  container: {
    display: "grid",
    justifyItems: "center",
  },
  header: {
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
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
