import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flex: "1",
    background: theme.palette.background.gray,
    width: "100%",
  },
  paper: {
    ...theme.card,
    padding: "3rem",
    maxWidth: "700px",
  },
  alertstyle: {
    marginTop: "60px",
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
