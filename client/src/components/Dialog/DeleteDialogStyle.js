import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.gray,
    borderRadius: "20px",
    padding: "2em",
    margin: "2em",
  },
  text: {
    marginBottom: "1em",
  },
}));
