import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { MdMailOutline, MdAccountBox, MdExplore } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& >*": {
      fontSize: "1.25rem",
      width: "100%",
      color: "white",
    },
    background: "#292929",
  },
  isActive: {
    background: "#393939",
    "&:hover": {
      background: "#494949",
    },
  },
}));

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  function onButtonClick(id) {
    setSelected(id);
  }
  return (
    <div className={classes.container}>
      <Button
        component={RouterLink}
        to="/login"
        onClick={() => onButtonClick(1)}
        className={window.location.pathname == "/login" ? classes.isActive : ""}
        startIcon={<MdAccountBox />}
      >
        Login
      </Button>
      <Button
        component={RouterLink}
        to="/users"
        onClick={() => onButtonClick(2)}
        className={window.location.pathname == "/users" ? classes.isActive : ""}
        startIcon={<MdExplore />}
      >
        Users
      </Button>
      <Button
        component={RouterLink}
        to="/posts"
        onClick={() => onButtonClick(3)}
        className={window.location.pathname == "/posts" ? classes.isActive : ""}
        startIcon={<MdMailOutline />}
      >
        Posts
      </Button>
    </div>
  );
};

export default Sidebar;
