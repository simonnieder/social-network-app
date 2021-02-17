import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { MdMailOutline, MdAccountBox, MdExplore } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "#292929",
  },
  navButton: {
    height: "calc(100vh / 3)",
    fontSize: "2rem",
    width: "100%",
    color: "white",
    borderRadius: "0",
    "& *": {
      fontSize: "2rem",
    },
  },
  isActive: {
    background: "#393939",
    "&:hover": {
      background: "#393939",
    },
  },
  myicon: {
    fontSize: "5rem",
  },
}));

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  function onButtonClick(id) {
    setSelected(id);
  }
  return (
    <div className={classes.root}>
      <Button
        component={RouterLink}
        to="/login"
        onClick={() => onButtonClick(1)}
        className={`${classes.navButton} ${window.location.pathname == "/login" ? classes.isActive : ""}`}
        startIcon={<MdAccountBox style={{ fontSize: "2rem" }} />}
      >
        Login
      </Button>
      <Button
        component={RouterLink}
        to="/users"
        onClick={() => onButtonClick(2)}
        className={`${classes.navButton} ${window.location.pathname == "/users" ? classes.isActive : ""}`}
        startIcon={<MdExplore style={{ fontSize: "2rem" }} />}
      >
        Users
      </Button>
      <Button
        component={RouterLink}
        to="/posts"
        onClick={() => onButtonClick(3)}
        className={`${classes.navButton} ${window.location.pathname == "/posts" ? classes.isActive : ""}`}
        startIcon={<MdMailOutline style={{ fontSize: "2rem" }} />}
      >
        Posts
      </Button>
    </div>
  );
};

export default Sidebar;
