import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import UserInfo from "./UserInfo/UserInfo";
import { useStyles } from "./SidebarStyle";
const Sidebar = ({ username, setUsername }) => {
  const [selected, setSelected] = useState(false);
  const classes = useStyles();
  function onButtonClick() {
    setSelected(!selected);
  }

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <Typography variant="h4">Posts</Typography>
        <RouterLink
          to="/posts"
          onClick={() => onButtonClick()}
          className={`${classes.link} ${window.location.pathname == "/posts" ? classes.isActive : ""}`}
        >
          <Typography variant="h5">All Posts</Typography>
        </RouterLink>

        {username != "" && (
          <RouterLink
            to="/create-post"
            onClick={() => onButtonClick()}
            className={`${classes.link} ${window.location.pathname == "/create-post" ? classes.isActive : ""}`}
          >
            <Typography variant="h5">Create Post</Typography>
          </RouterLink>
        )}
        <Typography variant="h4">Users</Typography>
        {username != "" && (
          <RouterLink
            to={`/users/${username}`}
            onClick={() => onButtonClick()}
            className={`${classes.link} ${window.location.pathname == `/users/${username}` ? classes.isActive : ""}`}
          >
            <Typography variant="h5">My Account</Typography>
          </RouterLink>
        )}
        <RouterLink
          to="/users"
          onClick={() => onButtonClick()}
          className={`${classes.link} ${window.location.pathname == "/users" ? classes.isActive : ""}`}
        >
          <Typography variant="h5">All Users</Typography>
        </RouterLink>
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
