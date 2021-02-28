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
  paper: {
    padding: "2rem",
    width: "500px",
  },
  alertstyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.25rem",
    display: "flex",
    alignItems: "center",
    padding: ".5rem 0.8rem",
    color: "#00b894",
    border: "1px solid #00b894",
    borderRadius: "10px",
  },
}));
