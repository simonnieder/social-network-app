import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    background: theme.palette.background.gray,
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
