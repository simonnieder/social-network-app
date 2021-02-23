import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { MdMailOutline, MdAccountBox, MdExplore } from "react-icons/md";
import { Typography, Button } from "@material-ui/core";
import UserInfo from "./UserInfo";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100vh",
    background: theme.palette.primary.main,
    color: "white",
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    margin: "1.5rem 0",
  },
  isActive: {
    textDecoration: "underline",
  },
  login: {
    color: theme.palette.primary.main,
    background: "white",
  },
}));

const Sidebar = ({ username, setUsername }) => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();
  function onButtonClick(id) {
    setSelected(id);
  }

  return (
    <div className={classes.root}>
      <div>
        <RouterLink
          to="/posts"
          onClick={() => onButtonClick(1)}
          className={`${classes.link} ${window.location.pathname == "/posts" ? classes.isActive : ""}`}
        >
          <Typography variant="h4">All Posts</Typography>
        </RouterLink>
        {username != "" && (
          <RouterLink
            to={`/users/${username}`}
            onClick={() => onButtonClick(2)}
            className={`${classes.link} ${window.location.pathname == `/users/${username}` ? classes.isActive : ""}`}
          >
            <Typography variant="h4">My Posts</Typography>
          </RouterLink>
        )}
        <RouterLink
          to="/users"
          onClick={() => onButtonClick(3)}
          className={`${classes.link} ${window.location.pathname == "/users" ? classes.isActive : ""}`}
        >
          <Typography variant="h4">Users</Typography>
        </RouterLink>

        {username != "" && (
          <RouterLink
            to="/create-post"
            onClick={() => onButtonClick(4)}
            className={`${classes.link} ${window.location.pathname == "/create-post" ? classes.isActive : ""}`}
          >
            <Typography variant="h4">Create Post</Typography>
          </RouterLink>
        )}
      </div>
      {username != "" ? (
        <UserInfo username={username} onSetUsername={setUsername}></UserInfo>
      ) : (
        <div>
          <Button variant="contained" component={RouterLink} to="/login" className={`${classes.link} ${classes.login}`}>
            <Typography variant="h4">Login</Typography>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
