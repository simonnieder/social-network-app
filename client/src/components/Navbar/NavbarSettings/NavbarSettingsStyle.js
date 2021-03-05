import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: "9999",
    position: "absolute",
    bottom: "0",
    right: "25px",
    transform: "translateY(97%)",
    background: theme.palette.primary.main,
    borderRadius: "5px",
    border: "1px solid white",
    padding: "10px 5px",
  },
  item: {
    fontSize: "1.25rem",
    color: theme.palette.color.gray,
    margin: "1rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all .2s ease",
    "&:hover": {
      color: "white",
    },
  },
  icon: {
    fontSize: "2rem",
    marginRight: "10px",
  },
}));
