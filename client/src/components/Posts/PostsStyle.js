import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
    background: theme.palette.background.gray,
  },
  container: {
    display: "grid",
    justifyItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    color: "#393939",
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
