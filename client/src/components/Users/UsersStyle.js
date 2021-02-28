import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    width: "100%",
    overflowY: "auto",
    margin: "0 auto",
    background: theme.palette.background.gray,
  },
  container: {
    gridAutoRows: "5rem",
    columnGap: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.background.gray,
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
}));
