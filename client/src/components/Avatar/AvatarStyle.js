import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "50%",
    background: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "2em",
    width: "2em",
    flexShrink: "0",
  },
}));
