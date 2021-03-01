import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  card: {
    ...theme.card,
    wordBreak: "break-word",
  },
  text: {
    fontSize: "1.25em",
    margin: "0.25rem 0",
    fontWeight: theme.typography.body1.fontWeight,
    fontFamily: theme.typography.body1.fontFamily,
    color: theme.typography.body1.color,
    whiteSpace: "pre-wrap",
    maxHeight: "400px",
    overflowY: "auto",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editContainer: {
    display: "block",
  },
  input: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    maxHeight: "350px",
    outline: "none",
    border: "1px solid #dfe4ea",
    borderRadius: "5px",
    "&:focus": {
      border: "1px solid #a4b0be",
    },
  },
  inputTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    fontFamily: theme.typography.h4.fontFamily,
    color: theme.typography.h4.color,
  },
  alertstyle: {
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
  icon: {
    fontSize: "1em",
  },
}));
